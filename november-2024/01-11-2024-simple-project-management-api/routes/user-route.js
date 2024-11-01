import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
  res
    .status(200)
    .send("You have successfully arrived to the GET METHOD of users path.");
});

router.post("/users", (req, res) => {
  const {
    fName,
    lName,
    age,
    birthDate,
    location: { city, state, country },
    email,
    role,
  } = req.body;

  Object.entries(req.body).forEach(([key, value]) => {
    if (!value) {
      return res.status(404).json({
        message: `You have forgotten to add some data to the body.`,
        keysMissing: `Forgot to provide: ${key}.`,
      });
    }
  });

  res.status(200).json({
    message: `You have successfully added the user: "${fName}" to the database.`,
    dataReceived: req.body,
  });
});

router.patch("/users/:id", (req, res) => {
  res
    .status(200)
    .send("You have successfully arrived to the patch METHOD of users path.");
});

router.delete("/users/:id", (req, res) => {
  res
    .status(200)
    .send("You have successfully arrived to the delete METHOD of users path.");
});

export default router;
