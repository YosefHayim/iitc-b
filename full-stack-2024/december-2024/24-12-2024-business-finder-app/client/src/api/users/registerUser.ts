import apiClient from "../apiClient";

const registerUser = async (data) => {
  try {
    const response = await apiClient.post(`/api/users/register`, data);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

export default registerUser;
