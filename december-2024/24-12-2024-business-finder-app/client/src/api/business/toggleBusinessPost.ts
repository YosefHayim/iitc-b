import axios from "axios";

const toggleBusiness = async ({
  userId,
  businessId,
}: {
  userId: string;
  businessId: string;
}) => {
  try {
    const { data } = await axios.put(
      `http://localhost:3000/api/business/${userId}/${businessId}` // Corrected route
    );

    if (data) {
      return data;
    } else {
      throw new Error("No response data found");
    }
  } catch (error) {
    console.error(`Error while toggling business:`, error.message);
    throw error;
  }
};

export default toggleBusiness;
