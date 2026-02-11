import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../api/authAxios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await authApi.post("/signup", inputValue);

      if (data.success) {
        toast.success("Signup successful. Please login.", {
          position: "bottom-right",
        });
        setTimeout(() => navigate("/login"), 1000);
      } else {
        toast.error(data.message || "Signup failed", {
          position: "bottom-left",
        });
      }
    } catch (error) {
      toast.error("User already exists or invalid data", {
        position: "bottom-left",
      });
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit">Submit</button>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;
