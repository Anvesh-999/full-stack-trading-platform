import React, { useEffect, useState } from "react";
import authAxios from "../api/authAxios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await authAxios.get("/verify");

        if (data.status) {
          setUsername(data.user); 
        } else {
          window.location.replace("http://localhost:3000/login");
        }
      } catch {
        window.location.replace("http://localhost:3000/login");
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <TopBar  />
      <Dashboard  username={username}/>
    </>
  );
};

export default Home;
