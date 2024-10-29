import express from "express"
import fs from "fs"
import products from "../db/products.json" with { type: "json" }

const router = express.Router()

router.get('/', (req,res) => {
  res.json(products)
})

// Get product by ID
router.get("/api/product/:id", (req, res) => {
  const id = +req.params['id'] 
  const data = products.find((product) => product.id === id)
    
  if (data) {
      res.send(data)
  }
  res.send({
    error: `Error this id:${id} is not valid, please provide valid ID.`
  })
})

//get a Random products
router.get('/api/random/products', (req,res) => {
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  res.send({
    status: "Success",
    message: randomProduct,
  })
})

// Add product to the products.json file
router.post('/api/random/products', (req,res) => {
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

// modify (patch) existing product ID
router.patch('/products/:id', (req, res) => {
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

// delete a product item
router.delete('/products/:id', (req, res) => {
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

export default router;
