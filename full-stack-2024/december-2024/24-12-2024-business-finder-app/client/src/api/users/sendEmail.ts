import apiClient from "../apiClient";

const sendEmail = async (data) => {
  console.log(data);

  try {
    const response = await apiClient.post(`/api/users/send-email`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
};

export default sendEmail;
