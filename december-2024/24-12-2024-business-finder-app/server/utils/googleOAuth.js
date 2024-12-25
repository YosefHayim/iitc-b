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

module.exports = { oAuth2Client };
