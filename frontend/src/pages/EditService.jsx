import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    fetchService();
  },);

  const fetchService = async () => {
    const res = await API.get("/services");
    const service = res.data.find((s) => s._id === id);
    setForm(service);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await API.put(`/services/${id}`, form, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert("Updated successfully");
      navigate("/my-services");
    } catch (error) {
      alert("Error updating",error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded w-96"
      >
        <h2 className="text-2xl mb-4 text-center">Edit Service</h2>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
        />

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}