const bcrypt = require("bcrypt");

export const comparePw = async (userPassword, dbPassword) => {
  try {
    const match = await bcrypt.compare(userPassword, dbPassword);
    return match;
  } catch (err) {
    throw new Error("Error during password comparison: " + err);
  }
};
