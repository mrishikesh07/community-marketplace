import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);

      alert("Registered successfully");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Error registering");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl mb-4 text-center">Register</h2>

        <input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <input
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />

        <select
          name="role"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="provider">Provider</option>
        </select>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
          Register
        </button>
      </form>
    </div>
  );
}