import { useEffect, useState } from "react";
import API from "../services/api";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.get("/bookings/user", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-xl mb-6
        md:text-4xl font-normal text-gray-800 leading-tight">My Bookings</h1>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="border p-4 rounded shadow border bg-white p-4 rounded border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold">
              {booking.serviceId?.title}
            </h2>

            <p>Status: 
              <span className="ml-2 font-semibold">
                {booking.status}
              </span>
            </p>

            <p className="text-sm text-gray-500">
              Provider: {booking.providerId?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}