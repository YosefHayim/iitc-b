import apiClient from "../apiClient";

const loginUser = async (data) => {
  try {
    const response = await apiClient.post(`/api/users/login`, data);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
};

export default loginUser;
