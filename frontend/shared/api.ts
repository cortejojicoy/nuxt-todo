import axios from "axios";

const ENDPOINT = "http://localhost:8000/api";

const axiosFactory = (baseURL: string) => {
  return axios.create({
    baseURL,
    // withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    },
  });
};

const APIAxios = axiosFactory(ENDPOINT);

export { APIAxios };
