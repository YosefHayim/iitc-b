import apiClient from "../apiClient";

const getBusinessById = async (businessId: string) => {
  try {
    const { data } = await apiClient.get(
      `http://localhost:3000/api/business/${businessId}`
    );
    console.log(data);

    if (data?.success && data?.response) {
      return data.response;
    } else {
      throw new Error(data?.error || "No response data found");
    }
  } catch (error) {
    console.error(`Error while fetching business post:`, error.message);
    throw error;
  }
};

export default getBusinessById;
