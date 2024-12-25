import apiClient from "../apiClient";

const addBusinessPostReview = async ({ userId, businessId, comment }) => {
  try {
    const url = `http://localhost:3000/api/business/${userId}/${businessId}`;

    const response = await apiClient.post(url, { comment });

    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error adding business post:", error);
    throw error;
  }
};

export default addBusinessPostReview;
