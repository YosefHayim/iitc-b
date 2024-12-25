import axios from "axios";

const registerUser = async (data: any) => {
  try {
    const url = `http://localhost:3000/api/users/register`;

    const response = await axios.post(url, data);

    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error adding business post:", error);
    throw error;
  }
};

export default registerUser;
