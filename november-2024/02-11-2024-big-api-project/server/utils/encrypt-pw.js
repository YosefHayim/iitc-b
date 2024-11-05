import bcrypt from "bcrypt";
import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

const encryptedPw = async (password) => {
  password = password + process.env.SECRET_KEY;

  try {
    let hashedPw = await bcrypt.hash(password, 10);
    return hashedPw ? hashedPw : "Failed to encrypt the password.";
  } catch (error) {
    console.error(`Could not encrypt your password: ${error.message}`);
  }
};

export { encryptedPw };
