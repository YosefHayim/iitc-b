import axios from "axios";
import Cookies from "js-cookie";

// Configure Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Replace with your API base URL
  withCredentials: true, // Allow sending cookies with requests
});

// Add a request interceptor to include token in headers
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("cookie"); // Retrieve token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Set Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
