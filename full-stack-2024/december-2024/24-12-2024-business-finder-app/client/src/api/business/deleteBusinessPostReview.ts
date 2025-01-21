import apiClient from "../apiClient";

const deleteBusinessPostReview = async ({ userId, businessId, reviewId }) => {
  try {
    const url = `http://localhost:3000/api/business/${userId}/${businessId}/${reviewId}`;
    const response = await apiClient.delete(url);

    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error deleting business post review:", error);
    throw error;
  }
};

export default deleteBusinessPostReview;
