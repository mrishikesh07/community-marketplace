import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await API.get("/services");
      const user = JSON.parse(localStorage.getItem("user"));

      // show only provider's services
      const myServices = res.data.filter(
        (s) => s.providerId?._id === user._id
      );

      setServices(myServices);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async (id) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await API.delete(`/services/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert("Deleted successfully");
      fetchServices();
    } catch (error) {
      alert("Error deleting", error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-xl mb-6
        md:text-4xl font-light text-gray-800 leading-tight">My Services</h1>

      <div className="space-y-4">
        {services.map((service) => (
          <div key={service._id} className="border bg-white p-4 rounded border border-gray-100 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p>₹{service.price}</p>

            <div className="mt-2 flex gap-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() =>
                  window.location.href = `/edit-service/${service._id}`
                }
              >
                Edit
              </button>

              <button
                onClick={() => deleteService(service._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}