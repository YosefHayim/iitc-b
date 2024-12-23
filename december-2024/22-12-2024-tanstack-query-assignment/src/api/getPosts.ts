import axios from "axios";
import { PostFormData } from "../types/types";

const getPosts = async (): Promise<PostFormData[]> => {
  try {
    const res = await axios.get<PostFormData[]>("http://localhost:3000/posts");
    console.log(res);

    return res.data;
  } catch (error: any) {
    console.error("Error occurred during fetching posts: ", error.message);
    throw error;
  }
};

export default getPosts;
