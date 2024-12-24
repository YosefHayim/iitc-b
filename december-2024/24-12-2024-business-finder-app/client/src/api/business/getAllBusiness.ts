import axios from "axios";

const getAllBusiness = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/business/");

    if (data) {
      console.log(data.response);
      return data.response;
    }
  } catch (error) {
    console.error(`Error while fetching business posts: `, error);
  }
};

export default getAllBusiness;
