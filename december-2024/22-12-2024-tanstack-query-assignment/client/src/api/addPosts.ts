import axios from "axios";
import { PostFormData } from "../types/types";

const addPosts = async (data: PostFormData): Promise<void> => {
  try {
    const res = await axios.post("http://localhost:3000/posts", data);
    console.log(res);

    return res.data;
  } catch (error: any) {
    console.error("Error occurred during adding a post: ", error.message);
    throw error;
  }
};

export default addPosts;
