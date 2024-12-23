import axios from "axios";

const updatePostById = async (id: string): Promise<void> => {
  try {
    const res = await axios.put(`http://localhost:3000/api/posts/${id}`);
    console.log(res);
  } catch (error: any) {
    console.error("Error occurred during deleting the post: ", error.message);
    throw error;
  }
};

export default updatePostById;
