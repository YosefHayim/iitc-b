import { randomJoke,randomProducts,randomUsername,jokesArray,usernamesArray,productsArray } from "./random-data.js";
import express from "express"

const app = express()
const PORT = process.env.port || 3000;

app.use((express.json()))

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

app.post('/api/random/jokes', (req,res) => {
  const newJoke = req.body
  jokesArray.push(newJoke)
  res.send({
    response: "New joke added",newJoke,
  })
})

app.get('/api/random/products', (req,res) => {
  res.send({
    status: "Success",
    message: `product: ${randomProducts}`
  })
})

app.post('/api/random/products', (req,res) => {
  const newProduct = req.body
  productsArray.push(newProduct)
  res.send({
    response: "New product added",newProduct,
  })
})

app.get('/api/random/usernames', (req,res) => {
  res.send({
    status: "Success",
    message: `username: ${randomUsername}`
  })
})

app.post('/api/random/usernames', (req,res) => {
  const newUser = req.body
  productsArray.push(newUser)
  res.send({
    response: "New User Added",newUser,
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
