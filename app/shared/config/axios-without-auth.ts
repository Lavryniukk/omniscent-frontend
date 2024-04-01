import axios from "axios";

export const axiosWithoutAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
  withCredentials: true, // Include cookies in the request (equivalent to credentials: 'include')
  headers: {
    "Content-Type": "application/json",
  },
});
