import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

export default authAxios;
