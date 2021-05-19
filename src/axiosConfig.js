import axios from "axios";

const instance = axios.create({
  baseURL: "http://34.126.112.11:8080",
});

export default instance;
