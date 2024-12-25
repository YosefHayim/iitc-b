import axios from "axios";

const getUserById = async (userId: any) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/users/${userId}`
    );

    if (data) {
      console.log(data);
      return data;
    } else {
      throw new Error(data?.error || "No response data found");
    }
  } catch (error) {
    console.error(`Error while fetching business post:`, error.message);
    throw error;
  }
};

export default getUserById;
