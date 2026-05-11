import { useState } from "react";
import API from "../services/api";

export default function AddService() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await API.post("/services", form, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert("Service added successfully 🎉");
    } catch (error) {
      alert(error.response?.data?.message || "Error adding service");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl mb-4 text-center">Add Service</h2>

        <input
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
          Add Service
        </button>
      </form>
    </div>
  );
}