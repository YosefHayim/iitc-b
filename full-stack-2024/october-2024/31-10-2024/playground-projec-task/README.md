# API Playground Documentation 31-10-2024 

Welcome! This guide will help you understand how to interact with the API for jokes, products, and users. Whether you're new to programming or just getting started with APIs, this documentation will walk you through each step.

## Base URL

All API endpoints start with the following base URL:

```
http://localhost:3000
```

## Table of Contents

- [Jokes API](#jokes-api)
  - [Get All Jokes](#get-all-jokes)
  - [Get a Specific Joke by ID](#get-a-specific-joke-by-id)
  - [Create a New Joke](#create-a-new-joke)
  - [Update a Joke](#update-a-joke)
  - [Delete a Joke](#delete-a-joke)
- [Products API](#products-api)
  - [Get All Products](#get-all-products)
  - [Get a Specific Product by ID](#get-a-specific-product-by-id)
  - [Create a New Product](#create-a-new-product)
  - [Update a Product](#update-a-product)
  - [Delete a Product](#delete-a-product)
- [Users API](#users-api)
  - [Get All Users](#get-all-users)
  - [Get a Specific User by ID](#get-a-specific-user-by-id)
  - [Create a New User](#create-a-new-user)
  - [Update a User](#update-a-user)
  - [Delete a User](#delete-a-user)
- [FAQ](#faq)

---

## Jokes API

### Get All Jokes

- **Endpoint:** `GET /api/jokes`
- **Description:** Retrieves a list of all jokes.

**Example Request:**

```http
GET http://localhost:3000/api/jokes
```

**Example Response:**

```json
[
  {
    "_id": "672746832698d13ee1cd2979",
    "name": "Giggles Galore",
    "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "providerName": "ComedyCentral"
  },
  {
    "_id": "672745f174276e0c7e777b08",
    "name": "Laugh Factory",
    "text": "Why don’t scientists trust atoms? Because they make up everything!",
    "providerName": "JokeHub"
  }
]
```

### Get a Specific Joke by ID

- **Endpoint:** `GET /api/jokes/{id}`
- **Description:** Retrieves a single joke using its unique ID.

**Example Request:**

```http
GET http://localhost:3000/api/jokes/672746832698d13ee1cd2979
```

**Example Response:**

```json
{
  "_id": "672746832698d13ee1cd2979",
  "name": "Giggles Galore",
  "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "providerName": "ComedyCentral"
}
```

### Create a New Joke

- **Endpoint:** `POST /api/jokes`
- **Description:** Adds a new joke to the database. You can insert a single joke or an array of jokes into the body for multiple database insertions.

**Example Request (Single Joke):**

```http
POST http://localhost:3000/api/jokes
Content-Type: application/json

{
  "name": "Giggles Galore",
  "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "providerName": "ComedyCentral"
}
```

**Example Request (Multiple Jokes):**

```http
POST http://localhost:3000/api/jokes
Content-Type: application/json

[
  {
    "name": "Joke One",
    "text": "Why did the math book look sad? Because it had too many problems.",
    "providerName": "MathHumor"
  },
  {
    "name": "Joke Two",
    "text": "I told my computer I needed a break, and it said no problem—it would go on a bit without me.",
    "providerName": "TechJokes"
  }
]
```

**Example Response:**

```json
{
  "message": "Joke(s) created successfully",
  "jokes": [
    {
      "_id": "672746832698d13ee1cd2979",
      "name": "Giggles Galore",
      "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
      "providerName": "ComedyCentral"
    }
    // Additional jokes if multiple were inserted
  ]
}
```

### Update a Joke

- **Endpoint:** `PUT /api/jokes/{id}`
- **Description:** Updates specific fields of a joke.

**Example Request:**

```http
PUT http://localhost:3000/api/jokes/672745f174276e0c7e777b08
Content-Type: application/json

{
  "name": "Comedy King"
}
```

**Example Response:**

```json
{
  "message": "Joke updated successfully",
  "joke": {
    "_id": "672745f174276e0c7e777b08",
    "name": "Comedy King",
    "text": "Why don’t scientists trust atoms? Because they make up everything!",
    "providerName": "JokeHub"
  }
}
```

### Delete a Joke

- **Endpoint:** `DELETE /api/jokes/{id}`
- **Description:** Removes a joke from the database using its ID.

**Example Request:**

```http
DELETE http://localhost:3000/api/jokes/672745f174276e0c7e777b08
```

**Example Response:**

```json
{
  "message": "Joke deleted successfully"
}
```

---

## Products API

### Get All Products

- **Endpoint:** `GET /api/products`
- **Description:** Retrieves a list of all products.

**Example Request:**

```http
GET http://localhost:3000/api/products
```

**Example Response:**

```json
[
  {
    "_id": "6727492c76ee09ec141e0632",
    "productTitle": "Smartwatch",
    "productDescription": "Water-resistant smartwatch with fitness tracking.",
    "productPrice": 149.99,
    "availableQuantity": 120,
    "productWarehouse": "Warehouse B",
    "productSupplierName": "Tech Innovators"
  }
]
```

### Get a Specific Product by ID

- **Endpoint:** `GET /api/products/{id}`
- **Description:** Retrieves a single product using its unique ID.

**Example Request:**

```http
GET http://localhost:3000/api/products/6727492c76ee09ec141e0632
```

**Example Response:**

```json
{
  "_id": "6727492c76ee09ec141e0632",
  "productTitle": "Smartwatch",
  "productDescription": "Water-resistant smartwatch with fitness tracking.",
  "productPrice": 149.99,
  "availableQuantity": 120,
  "productWarehouse": "Warehouse B",
  "productSupplierName": "Tech Innovators"
}
```

### Create a New Product

- **Endpoint:** `POST /api/products`
- **Description:** Adds a new product to the inventory. You can insert a single product or an array of products into the body for multiple database insertions.

**Example Request (Single Product):**

```http
POST http://localhost:3000/api/products
Content-Type: application/json

{
  "productTitle": "Smartwatch",
  "productDescription": "Water-resistant smartwatch with fitness tracking.",
  "productPrice": 149.99,
  "availableQuantity": 120,
  "productWarehouse": "Warehouse B",
  "productSupplierName": "Tech Innovators"
}
```

**Example Request (Multiple Products):**

```http
POST http://localhost:3000/api/products
Content-Type: application/json

[
  {
    "productTitle": "Laptop",
    "productDescription": "High-performance laptop for gaming and work.",
    "productPrice": 999.99,
    "availableQuantity": 50,
    "productWarehouse": "Warehouse A",
    "productSupplierName": "ComputeX"
  },
  {
    "productTitle": "Wireless Earbuds",
    "productDescription": "Noise-cancelling earbuds with long battery life.",
    "productPrice": 59.99,
    "availableQuantity": 200,
    "productWarehouse": "Warehouse C",
    "productSupplierName": "SoundWave"
  }
]
```

**Example Response:**

```json
{
  "message": "Product(s) created successfully",
  "products": [
    {
      "_id": "6727492c76ee09ec141e0632",
      "productTitle": "Smartwatch",
      "productDescription": "Water-resistant smartwatch with fitness tracking.",
      "productPrice": 149.99,
      "availableQuantity": 120,
      "productWarehouse": "Warehouse B",
      "productSupplierName": "Tech Innovators"
    }
    // Additional products if multiple were inserted
  ]
}
```

### Update a Product

- **Endpoint:** `PUT /api/products/{id}`
- **Description:** Updates specific fields of a product.

**Example Request:**

```http
PUT http://localhost:3000/api/products/6727492c76ee09ec141e0632
Content-Type: application/json

{
  "productTitle": "Apple Headphones"
}
```

**Example Response:**

```json
{
  "message": "Product updated successfully",
  "product": {
    "_id": "6727492c76ee09ec141e0632",
    "productTitle": "Apple Headphones",
    "productDescription": "Water-resistant smartwatch with fitness tracking.",
    "productPrice": 149.99,
    "availableQuantity": 120,
    "productWarehouse": "Warehouse B",
    "productSupplierName": "Tech Innovators"
  }
}
```

### Delete a Product

- **Endpoint:** `DELETE /api/products/{id}`
- **Description:** Removes a product from the inventory using its ID.

**Example Request:**

```http
DELETE http://localhost:3000/api/products/6727492c76ee09ec141e0632
```

**Example Response:**

```json
{
  "message": "Product deleted successfully"
}
```

---

## Users API

### Get All Users

- **Endpoint:** `GET /api/users`
- **Description:** Retrieves a list of all users.

**Example Request:**

```http
GET http://localhost:3000/api/users
```

**Example Response:**

```json
[
  {
    "_id": "67274bd776ee09ec141e063e",
    "fName": "Emma",
    "lName": "Garcia",
    "age": 22,
    "gender": "Female",
    "birthDate": "2002-03-14",
    "location": "Madrid, Spain",
    "email": "emma.garcia@example.com",
    "agreeToTerms": true
  }
]
```

### Get a Specific User by ID

- **Endpoint:** `GET /api/users/{id}`
- **Description:** Retrieves a single user using their unique ID.

**Example Request:**

```http
GET http://localhost:3000/api/users/67274bd776ee09ec141e063e
```

**Example Response:**

```json
{
  "_id": "67274bd776ee09ec141e063e",
  "fName": "Emma",
  "lName": "Garcia",
  "age": 22,
  "gender": "Female",
  "birthDate": "2002-03-14",
  "location": "Madrid, Spain",
  "email": "emma.garcia@example.com",
  "agreeToTerms": true
}
```

### Create a New User

- **Endpoint:** `POST /api/users`
- **Description:** Adds a new user to the system. You can insert a single user or an array of users into the body for multiple database insertions.

**Example Request (Single User):**

```http
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "fName": "Emma",
  "lName": "Garcia",
  "age": 22,
  "gender": "Female",
  "birthDate": "2002-03-14",
  "location": "Madrid, Spain",
  "email": "emma.garcia@example.com",
  "agreeToTerms": true
}
```

**Example Request (Multiple Users):**

```http
POST http://localhost:3000/api/users
Content-Type: application/json

[
  {
    "fName": "Liam",
    "lName": "Smith",
    "age": 30,
    "gender": "Male",
    "birthDate": "1992-08-21",
    "location": "London, UK",
    "email": "liam.smith@example.com",
    "agreeToTerms": true
  },
  {
    "fName": "Sophia",
    "lName": "Johnson",
    "age": 28,
    "gender": "Female",
    "birthDate": "1994-05-10",
    "location": "New York, USA",
    "email": "sophia.johnson@example.com",
    "agreeToTerms": true
  }
]
```

**Example Response:**

```json
{
  "message": "User(s) created successfully",
  "users": [
    {
      "_id": "67274bd776ee09ec141e063e",
      "fName": "Emma",
      "lName": "Garcia",
      "age": 22,
      "gender": "Female",
      "birthDate": "2002-03-14",
      "location": "Madrid, Spain",
      "email": "emma.garcia@example.com",
      "agreeToTerms": true
    }
    // Additional users if multiple were inserted
  ]
}
```

### Update a User

- **Endpoint:** `PUT /api/users/{id}`
- **Description:** Updates specific fields of a user's information.

**Example Request:**

```http
PUT http://localhost:3000/api/users/67274bd776ee09ec141e063e
Content-Type: application/json

{
  "fName": "Alicia"
}
```

**Example Response:**

```json
{
  "message": "User updated successfully",
  "user": {
    "_id": "67274bd776ee09ec141e063e",
    "fName": "Alicia",
    "lName": "Garcia",
    "age": 22,
    "gender": "Female",
    "birthDate": "2002-03-14",
    "location": "Madrid, Spain",
    "email": "emma.garcia@example.com",
    "agreeToTerms": true
  }
}
```

### Delete a User

- **Endpoint:** `DELETE /api/users/{id}`
- **Description:** Removes a user from the system using their ID.

**Example Request:**

```http
DELETE http://localhost:3000/api/users/67274bd776ee09ec141e063e
```

**Example Response:**

```json
{
  "message": "User deleted successfully"
}
```

---

## FAQ

### 1. **Can I insert multiple records at once when creating new jokes, products, or users?**

**Answer:** Yes, you can insert multiple records by sending an array of objects in the request body when using the `POST` endpoint for creating new jokes, products, or users. This allows you to add multiple entries in a single API call.

**Example:**

```json
POST http://localhost:3000/api/jokes
Content-Type: application/json

[
  { "name": "Joke One", "text": "Joke text here", "providerName": "Provider One" },
  { "name": "Joke Two", "text": "Another joke text", "providerName": "Provider Two" }
]
```

### 2. **What format should dates be in when sending data to the API?**

**Answer:** Dates should be in the `YYYY-MM-DD` format. For example, to represent March 14, 2002, you would use `"2002-03-14"`.

### 3. **How do I handle errors or unsuccessful responses from the API?**

**Answer:** The API will return appropriate HTTP status codes and error messages when something goes wrong. Common status codes include:

- `400 Bad Request`: The request was invalid or cannot be served.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An error occurred on the server.

Always check the response status code and message to understand what went wrong.

