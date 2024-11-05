import bcrypt from "bcrypt";

const encryptedPw = async (password) => {
  try {
    let hashedPw = await bcrypt.hash(password, 10);
    return hashedPw ? hashedPw : "Failed to encrypt the password.";
  } catch (error) {
    console.error(`Could not encrypt your password: ${error.message}`);
  }
};

export { encryptedPw };
