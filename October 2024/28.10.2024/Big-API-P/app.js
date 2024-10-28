import express from "express"
import { randomJoke,randomProducts,randomUsername } from "./random-data.js";
const app = express()
const PORT = process.env.port || 3000;

app.get('/',(req,res) => {
  res.send({
    status: "Server is running",
    message: "Hello dear baba"
  })
})

app.get('/api/random/jokes', (req,res) => {
  res.send({
    status: "Success",
    message: `joke: ${randomJoke}`
  })
})

app.get('/api/random/products', (req,res) => {
  res.send({
    status: "Success",
    message: `product: ${randomProducts}`
  })
})

app.get('/api/random/usernames', (req,res) => {
  res.send({
    status: "Success",
    message: `username: ${randomUsername}`
  })
})

app.get('/api/status', (req,res) => {
  res.send({
    status: 'Server is running'
  })
})

app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
})
