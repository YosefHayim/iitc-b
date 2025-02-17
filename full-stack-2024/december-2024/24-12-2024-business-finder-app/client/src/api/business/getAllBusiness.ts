import apiClient from "../apiClient";

const getAllBusiness = async () => {
  try {
    const { data } = await apiClient.get("http://localhost:3000/api/business/");

    if (data) {
      return data.response;
    }
  } catch (error) {
    console.error(`Error while fetching business posts: `, error);
  }
};

export default getAllBusiness;
