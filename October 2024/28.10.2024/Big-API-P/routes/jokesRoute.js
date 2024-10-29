import express from "express"
import jokes from "../db/jokes.json" with { type: "json" }
import fs from "fs"

const router = express.Router()

// router is /api/jokes

router.get('/', (req,res) => {
  res.json(jokes)
})

// get a Random jokes
router.get('/random', (req,res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send({
    status: "Success",
    message: randomJoke,
  })
})

// Get Joke by ID
router.get("/:id", (req, res) => {
  const id = +req.params['id'] 
  const data = jokes.find((joke) => joke.id === id)
  
  if (data) {
      res.send(data)
  }
  res.send({
      error: `Error this id:${id} is not valid, please provide valid ID.`
  })
})

// Add new joke to the jokes.json file
router.post('/add/joke', (req, res) => {
  const {id, text} = req.body;

  const newJoke = {
    id,
    text,
  }
    console.log(newJoke);
    

  fs.readFile('../db/jokes.json', 'utf8', (err, data) => {
    if (err) {
      res.send({ Error: `Something went wrong while reading: ${err}` });
      return
    }

    const jokesArray = JSON.parse(data);
    console.log(jokesArray);
    jokesArray.push(newJoke);    

    fs.writeFile('../db/jokes.json', JSON.stringify(jokesArray), 'utf8', (err) => {
      if (err) {
        res.send({ Error: `Something went wrong while writing: ${err}` });
        return
      }
      res.send({ Added: newJoke });
    });
  });
});

// modify (patch) existing joke ID
router.patch('update/joke/:id', (req, res) => {
  // Get the required Id from the URL
  const requestedId = +req.params['id'];

  // Get the updated patch ID number.
  const updatedId = req.body.id;

  fs.readFile('./db/jokes.json', 'utf8', (err, data) => {
    if (err) {
      return res.send('Unable to read the current jokes.json file', err);
    }

    const jokesArray = JSON.parse(data);
    jokesArray.forEach((jokeLine) => {
      if (jokeLine.id === requestedId) {
        jokeLine.id = updatedId;
      }
    });

    fs.writeFile('./db/jokes.json', JSON.stringify(jokesArray), 'utf8', (err) => {
      if (err) {
        return res.send('Unable to modify the current jokes.json file', err);
      }
      res.send(`Successfully modified the requested Id ${requestedId}, updatedId is ${updatedId}`);
    });
  });
});

// delete an item joke
router.delete('delete/joke/:id', (req, res) => {
  const requestedId = +req.params['id'];

  fs.readFile('./db/jokes.json', 'utf8', (err, data) => {
    if (err) {
      return res.send('Unable to read the file', err);
    }

    const jokesArray = JSON.parse(data);
    const foundIndex = jokesArray.findIndex(joke => joke.id === requestedId);

    if (foundIndex === -1) {
      return res.send('Unable to find the specified ID');
    }

    jokesArray.splice(foundIndex, 1);

    fs.writeFile('./db/jokes.json', JSON.stringify(jokesArray), 'utf8', (err) => {
      if (err) {
        return res.send('Error writing to file', err);
      }
      res.send(`Requested joke with ID ${requestedId} has been removed.`);
    });
  });
});

export default router;
