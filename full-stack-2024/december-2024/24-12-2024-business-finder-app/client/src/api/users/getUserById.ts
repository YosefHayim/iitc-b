import apiClient from "../apiClient";

const getUserById = async (userId) => {
  try {
    const { data } = await apiClient.get(`/api/users/${userId}`);
    console.log(data);

    if (data) {
      return data;
    } else {
      throw new Error(data?.error || "No response data found");
    }
  } catch (error) {
    console.error(`Error while fetching user by ID:`, error.message);
    throw error;
  }
};

export default getUserById;
