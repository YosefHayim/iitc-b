import axios from "axios";
import { Post } from "../../types/types";

const getPostById = async (id: string): Promise<Post | null> => {
  try {
    const res = await axios.get<Post>(`http://localhost:3000/api/posts/${id}`);
    console.log(res);

    return res.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      console.error(`Post with ID ${id} not found.`);
      return null;
    }
    console.error(`Error fetching post with ID ${id}:`, error.message);
    throw error;
  }
};

export default getPostById;
