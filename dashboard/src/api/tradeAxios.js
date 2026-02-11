import axios from "axios";

const tradeApi = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

export default tradeApi;
