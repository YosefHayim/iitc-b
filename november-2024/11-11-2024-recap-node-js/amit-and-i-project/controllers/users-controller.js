const getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await userModel.find();

    isFalsy(getAllUsers);

    res.status(200).json({
      message: "Success",
      response: getAllUsers,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error occurred while getting all users: ${error}`,
    });
  }
};

const updateUserFullData = async (req, res) => {
  const userId = req.params.id;
  const { user, password, email } = req.body;
  try {
    const isUpdated = await userModel.findByIdAndUpdate({
      userId,
      user,
      password,
      email,
    });

    isFalsy(isUpdated);

    res.status(201).json({
      message: "Success",
      response: `User has been updated: ${newUser}`,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error occurred while updating user ID ${userId}: ${error}`,
    });
  }
};

module.exports = { getAllUsers, updateUserFullData };
