import axios from "axios";

const handleGoogleSignIn = async () => {
  try {
    const response = await axios.get("http://localhost:3000/oAuth/google");
    const authUrl = response.data.url;

    // Redirect the user to Google's OAuth2 page
    window.location.href = authUrl;
  } catch (error) {
    console.error("Error generating Google Auth URL:", error);
  }
};

export default handleGoogleSignIn;
