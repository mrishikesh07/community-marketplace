import { useEffect, useState } from "react";
import API from "../services/api";

export default function ProviderDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.get("/bookings/provider", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setBookings(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await API.put(
        `/bookings/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      fetchBookings();
    } catch (error) {
      alert("Error updating booking", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-xl text-center mb-6
        md:text-4xl font-light text-gray-800 leading-tight">
        Provider Dashboard
      </h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">
                {booking.serviceId?.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                User: {booking.userId?.name}
              </p>

              <p className="text-sm mt-2">
                Status:
                <span
                  className={`ml-2 font-semibold ${
                    booking.status === "accepted"
                      ? "text-green-600"
                      : booking.status === "rejected"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {booking.status}
                </span>
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() =>
                    updateStatus(booking._id, "accepted")
                  }
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
                >
                  Accept
                </button>

                <button
                  onClick={() =>
                    updateStatus(booking._id, "rejected")
                  }
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}