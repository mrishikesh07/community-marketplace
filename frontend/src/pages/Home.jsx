// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function Home() {
//   const [services, setServices] = useState([]);
//   const [search, setSearch] = useState("");
//   const [reviewsMap, setReviewsMap] = useState({});

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const res = await API.get("/services");
//       setServices(res.data);


//       res.data.forEach((service) => {
//         fetchReviews(service._id);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchReviews = async (serviceId) => {
//     try {
//       const res = await API.get(`/reviews/${serviceId}`);

//       setReviewsMap((prev) => ({
//         ...prev,
//         [serviceId]: res.data,
//       }));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleBooking = async (serviceId) => {
//     try {
//       if (!user) {
//         alert("Please login first");
//         return;
//       }

//       await API.post(
//         "/bookings",
//         {
//           serviceId,
//           date: new Date(),
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//       );

//       alert("Booking successful 🎉");
//     } catch (error) {
//       alert(error.response?.data?.message || "Error booking");
//     }
//   };


//   const filteredServices = services.filter((service) => {
//     const text = search.trim().toLowerCase();

//     return (
//       service.title.toLowerCase().includes(text) ||
//       service.description.toLowerCase().includes(text) ||
//       service.category?.toLowerCase().includes(text)
//     );
//   });

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-semibold mb-6">
//         Connecting neighbors through a smarter marketplace
//       </h1>

//       <input
//         type="text"
//         placeholder="Search services..."
//         className="w-full bg-white mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />


//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredServices.map((service) => {
//           const reviews = reviewsMap[service._id] || [];

//           const avgRating =
//             reviews.length > 0
//               ? (
//                   reviews.reduce((acc, r) => acc + r.rating, 0) /
//                   reviews.length
//                 ).toFixed(1)
//               : "No ratings";

//           return (
//             <div
//               key={service._id}
//               className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <h2 className="text-lg font-semibold">
//                 {service.title}
//               </h2>

//               <p className="text-gray-500 text-sm mt-1">
//                 {service.description}
//               </p>

//               <p className="mt-3 font-bold text-blue-600">
//                 ₹{service.price}
//               </p>

//               <p className="text-xs text-gray-400 mt-2">
//                 By {service.providerId?.name}
//               </p>


//               <p className="mt-2 text-yellow-500 font-semibold">
//                 ⭐ {avgRating}
//               </p>


//               {!user ? (
//                 <button className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg">
//                   Login to Book
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => handleBooking(service._id)}
//                   className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
//                 >
//                   Book Service
//                 </button>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {filteredServices.length === 0 && (
//         <p className="text-center text-gray-500 mt-6">
//           No services found
//         </p>
//       )}
//     </div>
//   );
// }


import homeTutor from '../assets/homeTutor.png';
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFFDF2] min-h-screen px-6 md:px-12">

      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center py-20">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight">
            Find trusted
            <br />
            services for
            <br />
            your home
          </h1>

          <p className="text-gray-500 mt-6 text-lg max-w-md">
            Book professionals for cleaning, repairs, tech, and more — all in one place.
          </p>

          {/* SEARCH (optional preview, not functional here) */}
          {/* <div className="mt-8">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full p-4 rounded-full border border-gray-200 shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div> */}

          {/* CTA BUTTON */}
          <button
            onClick={() => navigate("/services")}
            className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Explore Services →
          </button>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            className="rounded-2xl h-40 w-full object-cover"
          />
          <img
            src={homeTutor}
            className="rounded-2xl h-40 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            className="rounded-2xl h-40 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
            className="rounded-2xl h-40 w-full object-cover"
          />
        </div>
      </div>

      {/* OPTIONAL SECTION BELOW */}
      <div className="text-center pb-16">
        <h2 className="text-3xl font-normal text-gray-800 leading-tight">
          Why choose us?
        </h2>

        <div className="mt-9 grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-9 rounded-xl shadow-sm">
            <h3 className="font-semibold text-2xl">Verified Providers</h3>
            <p className="text-gray-500 text-sm mt-2">
              Trusted professionals for every service
            </p>
          </div>

          <div className="bg-white p-9 border border-gray-200 rounded-xl shadow-sm">
            <h3 className="font-semibold text-2xl">Easy Booking</h3>
            <p className="text-gray-500 text-sm mt-2">
              Book services in just a few clicks
            </p>
          </div>

          <div className="bg-white p-9 border border-gray-200 rounded-xl shadow-sm">
            <h3 className="font-semibold text-2xl">Secure Payments</h3>
            <p className="text-gray-500 text-sm mt-2">
              Safe and reliable transaction system
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}