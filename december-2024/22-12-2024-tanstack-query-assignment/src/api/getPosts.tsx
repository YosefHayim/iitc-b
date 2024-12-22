import axios from "axios";
import Post from "../types/Post";

const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await axios.get<Post[]>("http://localhost:3000/posts");
    return res.data;
  } catch (error: any) {
    console.error("Error occurred during fetching posts: ", error.message);
    throw error;
  }
};

export default getPosts;
