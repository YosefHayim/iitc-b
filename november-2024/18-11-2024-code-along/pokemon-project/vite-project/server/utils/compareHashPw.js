const bcrypt = require("bcrypt");

const compareHashPw = async (enteredPassword, userPassword) => {
  const isMatch = bcrypt.compare(enteredPassword, userPassword);
  return isMatch;
};

module.exports = compareHashPw;
