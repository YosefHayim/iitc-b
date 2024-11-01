import express from "express"

const router = express.Router()

router.get('/tasks', (req,res) => {
  res.status(200).send('You have successfully arrived to the GET METHOD of tasks path.')
})

router.post('/tasks', (req,res) => {
  res.status(200).send('You have successfully arrived to the POST METHOD of tasks path.')
})

router.patch('/tasks/:id', (req,res) => {
  res.status(200).send('You have successfully arrived to the patch METHOD of tasks path.')
})

router.delete('/tasks/:id', (req,res) => {
  res.status(200).send('You have successfully arrived to the delete METHOD of tasks path.')
})

export default router