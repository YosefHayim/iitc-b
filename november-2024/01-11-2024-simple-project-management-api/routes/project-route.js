import express from "express"

const router = express.Router()

router.get('/projects', (req,res) => {
  res.status(200).send('You have successfully arrived to the GET METHOD of projects path.')
})

router.post('/projects', (req,res) => {
  res.status(200).send('You have successfully arrived to the POST METHOD of projects path.')
})

router.patch('/projects/:id', (req,res) => {
  res.status(200).send('You have successfully arrived to the patch METHOD of projects path.')
})

router.delete('/projects/:id', (req,res) => {
  res.status(200).send('You have successfully arrived to the delete METHOD of projects path.')
})

export default router