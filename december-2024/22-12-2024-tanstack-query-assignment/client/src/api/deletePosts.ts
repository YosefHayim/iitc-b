import axios from "axios";

const deletePost = async (id: number): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    console.log(`Post with ID ${id} deleted successfully.`);
  } catch (error: any) {
    console.error("Error occurred during deleting the post: ", error.message);
    throw error;
  }
};

export default deletePost;
