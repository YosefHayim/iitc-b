const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PW,
  },
});

const emailSender = async (
  guestEmail,
  name,
  subject,
  message,
  additionalRecipients = []
) => {
  try {
    console.log("Starting email send process...");

    // Log email sender and recipients
    console.log("Email Sender:", process.env.EMAIL_SENDER);
    console.log("Email Password Loaded:", !!process.env.EMAIL_PW); // true if password exists
    console.log("Primary Recipient:", guestEmail);
    console.log("Additional Recipients:", additionalRecipients);

    // Combine guestEmail with additional recipients
    const recipients = [
      guestEmail,
      "yosefisabag@gmail.com",
      ...additionalRecipients,
    ].join(",");

    console.log("Final Recipient List:", recipients);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: recipients, // Send to all recipients
      subject,
      text: `hi ${name} Your message has been received:\n\n${message}`, // Plain text version
      html: `<p>Your message has been received:</p><p>${message}</p>`, // HTML version
    });

    console.log("Email sent successfully:", info.response);
    return info; // Return the response from Nodemailer
  } catch (error) {
    console.error("Error sending email:", error.message);

    // Log full error details for debugging
    console.error("Full Error Details:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};

module.exports = { emailSender };