import axios from "axios";
import { PostFormData } from "../../types/types";

const updateUser = async (email: string): Promise<void> => {
  try {
    const res = await axios.put(`http://localhost:3000/api/users/${email}`);
    console.log(res);

    return res.data;
  } catch (error: any) {
    console.error("Error occurred during adding a post: ", error.message);
    throw error;
  }
};

export default updateUser;
