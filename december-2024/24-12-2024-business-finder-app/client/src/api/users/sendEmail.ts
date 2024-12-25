import axios from "axios";

const sendEmail = async (data) => {
  console.log(data);

  try {
    const url = `http://localhost:3000/api/users/send-email`;
    const response = await axios.post(url, data);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
};

export default sendEmail;
