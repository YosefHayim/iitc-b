import express from "express";
import { userProjectSchema } from "../modules/users-project-schema.js";

const router = express.Router();

const fetchUsersP = async () => {
  try {
    const allJokes = await userProjectSchema.find();
    return allJokes;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Fetch all jokes
router.get("/all", async (req, res) => {
  try {
    const data = await fetchUsersP();
    res.status(200).json(data);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
    return;
  }
});

// Create a new joke
router.post("/create", async (req, res) => {
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
      res.status(404).send(`Sorry but one of your keys or values are missing in the body request: `,req.body)
    }
  }

  try {
    const newUser = new userProjectSchema({
      fName,
      lName,
      age,
      gender,
      birthDate,
      location,
      email,
      agreeToTerms,
    });

    const savedJoke = await newUser.save();
    res.status(201).json(savedJoke);
    return;
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error });
  }
});

export default router;
