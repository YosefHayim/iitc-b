import axios from "axios";
import { UserRegister } from "../../types/types";

const registerUser = async (data: UserRegister): Promise<void> => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/users/register",
      data
    );
    console.log(res);

    return res.data;
  } catch (error: any) {
    console.error("Error occurred during adding a post: ", error.message);
    throw error;
  }
};

export default registerUser;
