const bcrypt = require("bcrypt");

const securePw = async (userPassword) => {
  try {
    const result = bcrypt.hash(
      userPassword + process.env.SECRET_KEY_PW,
      (saltRounds = 10)
    );
    return result;
  } catch (error) {
    console.error(
      "error has been occurred while securing user password: ",
      error
    );
  }
};

module.exports = securePw;
