"use strict";
const express = require("express");
const { getProductById } = require("./products");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my basic Express server!");
});

const name = "Josephino"
app.get("/about", (req, res) => {
    res.send(`This server was created by ${name}`);
});

const phone = "0546187549"
const email = "yosefisabag@gmail.com"
app.get("/contact", (req, res) => {
    res.json({Email:`${email}`, Phone:`${phone}`});
});

// app.get("/api/products/:id", (req, res) => {
//     const id = req.params.id
//     for (let i = 0; i < products.length; i++){
//         if (products[i].id === id) {
//             res.send(products[i])
//             break;
//         }

//     }
//     if (!products[id]){
//         res.send('Not found')
//     }
// });

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id
    if (getProductById(id)) {
        res.send(getProductById(id))
    } else {
        res.send('Product not found')
    }

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


