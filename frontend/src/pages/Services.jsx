import { useEffect, useState } from "react";
import API from "../services/api";

export default function Services() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [reviewsMap, setReviewsMap] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await API.get("/services");
      setServices(res.data);

      res.data.forEach((service) => {
        fetchReviews(service._id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async (serviceId) => {
    try {
      const res = await API.get(`/reviews/${serviceId}`);
      setReviewsMap((prev) => ({
        ...prev,
        [serviceId]: res.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBooking = async (serviceId) => {
    try {
      if (!user) {
        alert("Please login first");
        return;
      }

      await API.post(
        "/bookings",
        {
          serviceId,
          date: new Date(),
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Booking successful 🎉");
    } catch (error) {
      alert(error.response?.data?.message || "Error booking");
    }
  };

  const filteredServices = services.filter((service) => {
    const text = search.trim().toLowerCase();

    return (
      service.title.toLowerCase().includes(text) ||
      service.description.toLowerCase().includes(text) ||
      service.category?.toLowerCase().includes(text)
    );
  });

  return (
    <div className="bg-[#fafafa] min-h-screen px-6 md:px-12 py-10">

      {/* HEADER */}
      <h1 className="text-4xl text-center mb-6
        md:text-6xl font-light text-gray-800 leading-tight
      ">
        Explore Services
      </h1>

      {/* SEARCH BAR */}
      <div className="mb-8">
        <input
          type="text"
          placeholder=" Search services..."
              className="w-full p-4 rounded-full bg-white text-xl border border-gray-200 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* SERVICES GRID */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const reviews = reviewsMap[service._id] || [];

          const avgRating =
            reviews.length > 0
              ? (
                  reviews.reduce((acc, r) => acc + r.rating, 0) /
                  reviews.length
                ).toFixed(1)
              : "No ratings";

          return (
            <div
              key={service._id}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              {/* CATEGORY */}
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {service.category}
              </span>

              {/* TITLE */}
              <h2 className="text-lg font-semibold mt-2">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm mt-1">
                {service.description}
              </p>

              {/* PRICE */}
              <p className="mt-3 font-bold text-gray-800">
                ₹{service.price}
              </p>

              {/* PROVIDER */}
              <p className="text-xs text-gray-400 mt-1">
                By {service.providerId?.name}
              </p>

              {/* RATING */}
              <p className="mt-2 text-yellow-500 font-semibold">
                ⭐ {avgRating}
              </p>

              {/* BUTTON */}
              {!user ? (
                <button className="mt-4 w-full bg-gray-300 text-gray-600 py-2 rounded-lg">
                  Login to Book
                </button>
              ) : (
                <button
                  onClick={() => handleBooking(service._id)}
                  className="mt-4 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg transition"
                >
                  Book Service
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {filteredServices.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No services found
        </p>
      )}
    </div>
  );
}