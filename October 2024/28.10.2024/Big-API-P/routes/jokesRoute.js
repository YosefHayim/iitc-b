import express from "express"
import jokes from "../db/jokes.json" with { type: "json" }
import fs from "fs"

const router = express.Router()

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
  // The + converts the id params to number.
  const id = +req.params['id'];

  if (typeof id !== 'number' || !id) {
    res.send(`You must provide a valid number, not a string: ${id}`);
    return
  }  

  const data = jokes.find((joke) => joke.id === id);

  if (data) {
    res.send(data);
    return;
  }

  if (!data) {
    res.send({
      error: `Error: ID ${id} is not valid, please provide a valid ID.`
    });
    return;
  }
});

// Add new joke to the jokes.json file
router.post('/add/joke', (req, res) => {
  const { id, text } = req.body;

  // Validate data types
  if (typeof id !== 'number') {
    return res.send(`ID must be a number. Received: ${id}`);
  }

  if (typeof text !== 'string') {
    return res.send(`Text must be a string. Received: ${text}`);
  }

  // Ensure values are not missing
  if (!id || !text) {
    return res.send(`ID or text is undefined.`);
  }

  const newJoke = { id, text };

  fs.readFile('./db/jokes.json', 'utf8', (err, data) => {
    if (err) {
      return res.send({ Error: `Something went wrong while reading: ${err}` });
    }

    const jokesArray = JSON.parse(data);
    jokesArray.push(newJoke);

    fs.writeFile('./db/jokes.json', JSON.stringify(jokesArray), 'utf8', (err) => {
      if (err) {
        return res.send({ Error: `Something went wrong while writing: ${err}` });
      }
      res.send({ Added: newJoke });
    });
  });
});

// modify (patch) existing joke ID
router.patch('/update/joke/:id', (req, res) => {
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
      return res.send(`Successfully modified the requested Id ${requestedId}, updatedId is ${updatedId}`);
    });
  });
});

// delete an item joke
router.delete('/delete/joke/:id', (req, res) => {
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
