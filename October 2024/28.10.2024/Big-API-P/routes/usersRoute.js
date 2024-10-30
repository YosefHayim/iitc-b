import express from "express"
import fs from "fs"
import users from "../db/users.json" with { type: "json" }

const router = express.Router()

router.get('/', (req,res) => {
  res.json(users)
})

//get a Random user
router.get('/random', (req,res) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  return res.send({
    status: "Success",
    message: randomUser,
  })
})

// Get user by ID
router.get("/:id", (req, res) => {
  const id = +req.params['id'] 
  console.log(id);
  
  const data = users.find((user) => user.id === id)

  if (data) {
      return res.send(data)
  }
  return res.send({
    error: `Error this id:${id} is not valid, please provide valid ID.`
  })
})

// Add new user to the users.json file
router.post('/add/user', (req,res) => {
  const newUser = req.body

  fs.readFile('./db/users.json', 'utf8', (err, data) => {
    if (err) {
      res.send({ Error: `Something went wrong while reading: ${err}` });
      return
    }

    const usersArray = JSON.parse(data);
    usersArray.push(newUser);

    fs.writeFile('./db/users.json', JSON.stringify(usersArray), 'utf8', (err) => {
      if (err) {
        res.send({ Error: `Something went wrong while writing: ${err}` });
        return
      }
    });
  });
  res.send({ Added: newUser });
})

// modify (patch) existing user ID
router.patch('/update/user/:id', (req, res) => {
  // Get the required Id from the URL
  const requestedId = +req.params['id'];
  
  // Get the updated patch ID number.
  const updatedId = req.body.id;

  fs.readFile('./db/users.json', 'utf8', (err, data) => {
    if (err) {
      return res.send('Unable to read the current users.json file', err);
    }

    const usersArray = JSON.parse(data);
    const isFound = false
    usersArray.forEach((userLine) => {
      if (userLine.id === requestedId) {
        userLine.id = updatedId;
        isFound = true
      }
    });

    if (!isFound) {
      return res.status(404).send({ error: `No user found with ID ${requestedId}` });
    }

    fs.writeFile('./db/users.json', JSON.stringify(usersArray), 'utf8', (err) => {
      if (err) {
        return res.send('Unable to modify the current users.json file', err);
      }
      res.send(`Successfully modified the requested Id ${requestedId}, updatedId is ${updatedId}`);
    });
  });
});


// delete an user item
router.delete('delete/user/:id', (req, res) => {
  const requestedId = +req.params['id'];

  fs.readFile('./db/users.json', 'utf8', (err, data) => {
    if (err) {
      res.send('Unable to read the file', err);
      return
    }

    const usersArray = JSON.parse(data);
    const foundIndex = usersArray.findIndex(user => user.id === requestedId);

    if (foundIndex === -1) {
      res.send('Unable to find the specified ID');
      return
    }

    usersArray.splice(foundIndex, 1);

    fs.writeFile('./db/users.json', JSON.stringify(usersArray), 'utf8', (err) => {
      if (err) {
        res.send('Error writing to file', err);
        return
      }
      res.send(`Requested joke with ID ${requestedId} has been removed.`);
    });
  });
});

export default router;
