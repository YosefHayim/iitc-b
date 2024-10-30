import express from "express";
import "dotenv/config";
import morgan from "morgan";
import { logRequest } from "./middleware/logger.js";
import jokesRoute from "./routes/jokesRoute.js";
import productsRoute from "./routes/productsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import { errorHandle } from "./middleware/catch-error.js";
import { MongoClient, ServerApiVersion } from "mongodb";

const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@iitc.tqkjc.mongodb.net/?retryWrites=true&w=majority&appName=IITC`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const app = express();
const PORT = process.env.port || 3000;

// Convert the responses to json.
app.use(express.json());
// Save each use of the app in the log txt file
app.use(logRequest);
// Log the use of app to the terminal
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.send({
    status: "Server is active",
  });
});

// Get response server is active
app.get("/api/status", (req, res) => {
  res.send({
    status: "API is running",
  });
});

app.use("/api/jokes", jokesRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);

app.use(errorHandle);

// Listen to anything happens on the server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
