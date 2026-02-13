import React, { useEffect, useState } from "react";
import authAxios from "../api/authAxios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [ready, setReady] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await authAxios.get("/verify");

        setUsername(data.user.username);

        setReady(true);
      } catch (err) {
        window.location.replace("http://localhost:3000/login");
      }
    };

    verifyUser();
  }, []);

  if (!ready) return null;

  return (
    <>
      <TopBar />
      <Dashboard username={username} />
    </>
  );
};

export default Home;
