import axios from "axios";

const addBusinessPostReview = async ({ userId, businessId, comment }) => {
  try {
    const url = `http://localhost:3000/api/business/${userId}/${businessId}`;

    const response = await axios.post(url, { comment });

    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.error("Error adding business post:", error);
    throw error;
  }
};

export default addBusinessPostReview;
