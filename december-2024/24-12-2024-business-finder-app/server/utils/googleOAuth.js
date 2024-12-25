const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();

// Verify environment variables are set
if (
  !process.env.CLIENT_ID ||
  !process.env.CLIENT_SECRET ||
  !process.env.REDIRECT_URI
) {
  console.error(
    "Missing required environment variables. Check CLIENT_ID, CLIENT_SECRET, and REDIRECT_URI."
  );
  process.exit(1); // Exit if misconfigured
}

// Configure the Google OAuth2 Client
const oAuth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Controller function to generate the auth URL
const getGoogleAuthUrl = (req, res) => {
  try {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    });
    console.log("Generated Auth URL:", authUrl); // Log the URL for debugging
    res.status(200).send({ url: authUrl });
  } catch (error) {
    console.error("Error generating Google Auth URL:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getGoogleAuthUrl };
