import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import authAxios from "../../api/authAxios"; 
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await authAxios.post("/login", { email, password });

      if (data.success) {
        toast.success("Login successful! Redirecting to dashboard...", {
          position: "bottom-right",
          autoClose: 1500,
        });

        setTimeout(() => {
          window.location.replace("http://localhost:3001"); // Dashboard app URL
        }, 1500);
      } else {
        toast.error(data.message || "Invalid credentials", {
          position: "bottom-left",
          autoClose: 2000,
        });
      }
    } catch (err) {
      toast.error("Server error. Please try again.", {
        position: "bottom-left",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <h2>Zerodha Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
