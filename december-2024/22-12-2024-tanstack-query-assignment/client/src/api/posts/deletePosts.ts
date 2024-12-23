import axios from "axios";

const deletePost = async (id: string): Promise<void> => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/posts/${id}`);
    console.log(res);
  } catch (error: any) {
    console.error("Error occurred during deleting the post: ", error.message);
    throw error;
  }
};

export default deletePost;
