import { userProjectSchema } from "../models/users-project-schema.js";

const fetchUsers = async (req, res) => {
  try {
    const allUsers = await userProjectSchema.find();
    if (!allUsers) {
      res
        .status(404)
        .send(`Our products data for some reason not found: ${allUsers}`);
    }
    res.status(200).send(`Success,${allUsers}`);
    return;
  } catch (error) {
    res
      .status(404)
      .send(`Something went wrong durning fetching the data: `, error);
    return;
  }
};

const createNewUser = async (req, res) => {
  // Shortcut to get all the body keys.
  const {
    fName,
    lName,
    age,
    gender,
    birthDate,
    location,
    email,
    agreeToTerms,
  } = req.body;

  // If for each key and his own value it doesn't have a value.
  for (const [key, value] of Object.entries(req.body)) {
    if (!key || !value) {
      res
        .status(404)
        .send(
          `Sorry but one of your keys or values are missing in the body request: `,
          req.body
        );
    }
  }

  try {
    const newUserData = new userProjectSchema({
      fName,
      lName,
      age,
      gender,
      birthDate,
      location,
      email,
      agreeToTerms,
    });
    const savedUser = await newUserData.save();
    res.status(201).json(savedUser);
    return;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating new schema product", error });
  }
};

const updateUserEmailById = async (req, res) => {
  const updateEmail = req.body.email;
  const userId = req.params.id;

  try {
    const updatedSchema = await userProjectSchema.findByIdAndUpdate(
      userId,
      {
        email: updateEmail,
      },
      { new: true }
    );

    res
      .status(201)
      .send(`Success, updated schema ID: ${userId}, ${updatedSchema}`);
  } catch (error) {
    res.status(400).send(`The Id: ${userId}, you provided isn't valid.`);
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const updatedSchema = await userProjectSchema.findByIdAndDelete(userId);

    res
      .status(200)
      .send(
        `Success the ID ${userId}, Schema: ${updatedSchema} has been successfully deleted.`
      );
  } catch (error) {
    res
      .status(400)
      .send(
        `The Id: ${userId}, you provided isn't valid to delete the Schema.`
      );
  }
};

export { fetchUsers, createNewUser, updateUserEmailById, deleteUserById };
