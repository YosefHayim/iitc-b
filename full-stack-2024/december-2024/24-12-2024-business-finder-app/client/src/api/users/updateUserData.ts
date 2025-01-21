import apiClient from "../apiClient";

const updateUserData = async (userId: any) => {
  try {
    const response = await apiClient.put(`/api/users/${userId}`, data);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw error;
  }
};

export default updateUserData;
