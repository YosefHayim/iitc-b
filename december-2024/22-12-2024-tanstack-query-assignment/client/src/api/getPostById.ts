import axios from "axios";
import { Post } from "../types/types";

const getPostById = async (id: string | number): Promise<Post | null> => {
  try {
    const res = await axios.get<Post>(`http://localhost:3000/posts/${id}`);
    return res.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      console.error(`Post with ID ${id} not found.`);
      return null; // Explicitly return null if not found
    }
    console.error(`Error fetching post with ID ${id}:`, error.message);
    throw error;
  }
};

export default getPostById;
