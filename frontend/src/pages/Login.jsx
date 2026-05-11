import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login successful");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Error logging in");
    }
  };

  return (
    < div className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl mb-4 text-center">Login</h2>

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

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
          Login
        </button>
      </form>

    </div>
  );
}