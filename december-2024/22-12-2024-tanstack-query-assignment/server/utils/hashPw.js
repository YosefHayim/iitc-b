export const hashPw = async (userPassword) => {
  const res = await bcrypt.genSalt((err, salt) => {
    bcrypt.hash(userPassword, salt, (err, hash) => {
      if (err)
        throw new Error("Error occurred during hashing password: " + err);
      return hash;
    });
  });
  return res;
};
