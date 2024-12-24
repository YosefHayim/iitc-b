import nodemailer from "nodemailer";
import { GuestEmail } from "../types/types";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PW,
  },
});

const emailSender = async (guestEmail: GuestEmail): Promise<void> => {
  try {
    return await transporter.sendMail({
      from: process.env.EMAiL_SENDER,
      to: guestEmail,
      subject: "Newsletter Signup Confirmation",
      text: "Thank you for signing up for our newsletter!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = { emailSender };
