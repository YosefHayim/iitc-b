import jokes from "./db/jokes.json" with {type: "json"}
import users from "./db/users.json" with {type: "json"}
import products from "./db/products.json" with {type: "json"}

import morgan from "morgan"
import fs from "fs"

const app = express()
const PORT = process.env.port || 3000;

app.use(morgan("short"))
app.use((express.json()))

app.get('/',(req,res) => {
  res.send({
    status: "Server is running"
  })
})

// get a Random jokes
app.get('/api/random/jokes', (req,res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send({
    status: "Success",
    message: randomJoke,
  })
})

// Get Joke by ID
app.get("/api/jokes/:id", (req, res) => {
  const id = +req.params['id'] 
  const data = jokes.find((joke) => joke.id === id)
  
  if (data) {
      res.send(data)
  }
  res.send({
      error: `Error this id:${id} is not valid, please provide valid ID.`
  })
})

// Get product by ID
app.get("/api/product/:id", (req, res) => {
  const id = +req.params['id'] 
  const data = products.find((product) => product.id === id)
    
  if (data) {
      res.send(data)
  }
  res.send({
    error: `Error this id:${id} is not valid, please provide valid ID.`
  })
})

// Get user by ID
app.get("/api/user/:id", (req, res) => {
  const id = +req.params['id'] 
  const data = users.find((user) => user.id === id)

  if (data) {
      res.send(data)
  }
  res.send({
    error: `Error this id:${id} is not valid, please provide valid ID.`
  })
})

// Add new joke to the jokes.json file
app.post('/api/random/jokes', (req, res) => {
  const newJoke = req.body;
  
  fs.readFile('./db/jokes.json', 'utf8', (err, data) => {
    if (err) {
      res.send({ Error: `Something went wrong while reading: ${err}` });
      return
    }

    const jokesArray = JSON.parse(data);
    jokesArray.push(newJoke);

    fs.writeFile('./db/jokes.json', JSON.stringify(jokesArray), 'utf8', (err) => {
      if (err) {
        res.send({ Error: `Something went wrong while writing: ${err}` });
        return
      }
      res.send({ Added: newJoke });
    });
  });
});

//get a Random products
app.get('/api/random/products', (req,res) => {
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  res.send({
    status: "Success",
    message: randomProduct,
  })
})

// Add product to the products.json file
app.post('/api/random/products', (req,res) => {
  const newProduct = req.body

  fs.readFile('./db/products.json', 'utf8', (err, data) => {
    if (err) {
      res.send({ Error: `Something went wrong while reading: ${err}` });
      return
    }

    const productsArray = JSON.parse(data);
    productsArray.push(newProduct);

    fs.writeFile('./db/products.json', JSON.stringify(productsArray), 'utf8', (err) => {
      if (err) {
        res.send({ Error: `Something went wrong while writing: ${err}` });
        return
      }
      res.send({ Added: newProduct });
    });
  });
})

//get a Random products
app.get('/api/random/usernames', (req,res) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  res.send({
    status: "Success",
    message: randomUser,
  })
})

// Add new user to the users.json file
app.post('/api/random/usernames', (req,res) => {
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

// Get response server is active
app.get('/api/status', (req,res) => {
  res.send({
    status: 'Server is running'
  })
})

// modify (patch) existing joke ID
app.patch('/jokes/:id', (req, res) => {
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

// modify (patch) existing user ID
app.patch('/users/:id', (req, res) => {
  // Get the required Id from the URL
  const requestedId = +req.params['id'];
  
  // Get the updated patch ID number.
  const updatedId = req.body.id;

  fs.readFile('./db/users.json', 'utf8', (err, data) => {
    if (err) {
      return res.send('Unable to read the current users.json file', err);
    }

    const usersArray = JSON.parse(data);
    usersArray.forEach((userLine) => {
      if (userLine.id === requestedId) {
        userLine.id = updatedId;
      }
    });

    fs.writeFile('./db/users.json', JSON.stringify(usersArray), 'utf8', (err) => {
      if (err) {
        return res.send('Unable to modify the current users.json file', err);
      }
      res.send(`Successfully modified the requested Id ${requestedId}, updatedId is ${updatedId}`);
    });
  });
});

// modify (patch) existing product ID
app.patch('/products/:id', (req, res) => {
  // Get the required Id from the URL
  const requestedId = +req.params['id'];
  
  // Get the updated patch ID number.
  const updatedId = req.body.id;

  fs.readFile('./db/products.json', 'utf8', (err, data) => {
    if (err) {
      return res.send('Unable to read the current users.json file', err);
    }

    const productsArray = JSON.parse(data);
    const productLine = productsArray.find((product) => product.id === requestedId);
    if (productLine) {
      productLine.id = updatedId;
    }
    
    fs.writeFile('./db/products.json', JSON.stringify(productsArray), 'utf8', (err) => {
      if (err) {
        return res.send('Unable to modify the current users.json file', err);
      }
      res.send(`Successfully modified the requested Id ${requestedId}, updatedId is ${updatedId}`);
    });
  });
});

// delete an item joke
app.delete('/jokes/:id', (req, res) => {
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

// delete an product item
app.delete('/products/:id', (req, res) => {
  const requestedId = +req.params['id'];

  fs.readFile('./db/jokes.json', 'utf8', (err, data) => {
    if (err) {
      return res.send('Unable to read the file', err);
    }

    const productsArray = JSON.parse(data);
    const foundIndex = productsArray.findIndex(product => product.id === requestedId);

    if (foundIndex === -1) {
      return res.send('Unable to find the specified ID');
    }

    productsArray.splice(foundIndex, 1);

    fs.writeFile('./db/products.json', JSON.stringify(productsArray), 'utf8', (err) => {
      if (err) {
        return res.send('Error writing to file', err);
      }
      res.send(`Requested joke with ID ${requestedId} has been removed.`);
    });
  });
});

// delete an user item
app.delete('/users/:id', (req, res) => {
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

// Listen to anything happens on the server.
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
})
