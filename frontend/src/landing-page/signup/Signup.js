import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthApi from "../../api/authAxios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await AuthApi.post("/signup", formData);

      if (data.success) {
        toast.success("Signup successful! Please login.", {
          position: "bottom-right",
        });

        setTimeout(() => navigate("/login"), 1000);
      } else {
        toast.error(data.message || "Signup failed", {
          position: "bottom-left",
        });
      }
    } catch (err) {
      toast.error("Something went wrong", { position: "bottom-left" });
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="brand">Zerodha</h2>
        <h3 className="title">Create your account</h3>
        <p className="subtitle">Start investing and trading with confidence</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email address"
            className="input"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Username"
            className="input"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            className="input"
            onChange={handleChange}
            required
          />

          <button className="signup-btn" type="submit">
            Sign up
          </button>
        </form>

        <p className="footer-text">
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;
