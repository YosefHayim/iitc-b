# API Documentation

Welcome to the API documentation for our service. This API allows you to interact with Jokes, Products, and Users resources. Below you will find detailed information on how to use each endpoint, including examples and FAQs.

## Table of Contents

- [Base URL](#base-url)
- [Authentication](#authentication)
- [Data Format](#data-format)
- [Jokes API](#jokes-api)
  - [Get Specific Joke by ID](#get-specific-joke-by-id)
  - [Get All Jokes](#get-all-jokes)
  - [Create a New Joke](#create-a-new-joke)
  - [Update a Joke](#update-a-joke)
  - [Delete a Joke](#delete-a-joke)
- [Products API](#products-api)
  - [Get Specific Product by ID](#get-specific-product-by-id)
  - [Get All Products](#get-all-products)
  - [Create a New Product](#create-a-new-product)
  - [Update a Product](#update-a-product)
  - [Delete a Product](#delete-a-product)
- [Users API](#users-api)
  - [Get Specific User by ID](#get-specific-user-by-id)
  - [Get All Users](#get-all-users)
  - [Create a New User](#create-a-new-user)
  - [Update a User](#update-a-user)
  - [Delete a User](#delete-a-user)

---

## Base URL

All API endpoints are based on the following base URL:

```
http://localhost:3000/api/
```

---

## Authentication

No authentication is required to access these endpoints.

---

## Data Format

- All data is sent and received as JSON.
- Ensure that you include the `Content-Type: application/json` header in your requests when sending data.

---

## Jokes API

### Get Specific Joke by ID

**Method**: `GET`

**Endpoint**: `/jokes/{id}`

**Description**: Retrieves a specific joke by its unique ID.

#### URL Parameters

- `id` (string): The unique identifier of the joke.

#### Example Request

```http
GET http://localhost:3000/api/jokes/672746832698d13ee1cd2979
```

#### Example Response

```json
{
  "_id": "672746832698d13ee1cd2979",
  "name": "Giggles Galore",
  "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "providerName": "ComedyCentral"
}
```

#### FAQs

1. **What if the joke ID does not exist?**

   You will receive a 404 Not Found error indicating that the joke does not exist.

2. **Can I use this endpoint to retrieve multiple jokes at once?**

   No, this endpoint retrieves only one joke per request. Use the "Get All Jokes" endpoint to retrieve all jokes.

3. **Is the joke ID case-sensitive?**

   Yes, the joke ID is case-sensitive and should be used exactly as provided.

---

### Get All Jokes

**Method**: `GET`

**Endpoint**: `/jokes`

**Description**: Retrieves a list of all jokes.

#### Example Request

```http
GET http://localhost:3000/api/jokes
```

#### Example Response

```json
[
  {
    "_id": "672746832698d13ee1cd2979",
    "name": "Giggles Galore",
    "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "providerName": "ComedyCentral"
  },
  {
    "_id": "672746832698d13ee1cd2980",
    "name": "Laugh Out Loud",
    "text": "Why don’t scientists trust atoms? Because they make up everything!",
    "providerName": "JokeHub"
  }
  // ... more jokes
]
```

#### FAQs

1. **Is there a limit to the number of jokes returned?**

   No, all jokes are returned in the response.

2. **Can I filter jokes by providerName?**

   Currently, filtering is not supported. You will need to filter the results on the client side.

3. **Are the jokes sorted in any particular order?**

   Jokes are returned in the order they were added to the database.

---

### Create a New Joke

**Method**: `POST`

**Endpoint**: `/jokes`

**Description**: Creates a new joke and adds it to the database.

#### Request Body

```json
{
  "name": "Giggles Galore",
  "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "providerName": "ComedyCentral"
}
```

#### Example Request

```http
POST http://localhost:3000/api/jokes
Content-Type: application/json

{
  "name": "Giggles Galore",
  "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "providerName": "ComedyCentral"
}
```

#### Example Response

```json
{
  "_id": "672746832698d13ee1cd2979",
  "name": "Giggles Galore",
  "text": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "providerName": "ComedyCentral",
  "createdAt": "2024-10-31T12:00:00Z",
  "updatedAt": "2024-10-31T12:00:00Z"
}
```

#### FAQs

1. **Are all fields required when creating a joke?**

   Yes, all fields (`name`, `text`, `providerName`) are required.

2. **What happens if I send invalid JSON in the request body?**

   You will receive a 400 Bad Request error indicating that the request body is invalid.

3. **Can I create multiple jokes in a single request?**

   No, you can only create one joke per request.

---

### Update a Joke

**Method**: `PUT`

**Endpoint**: `/jokes/{id}`

**Description**: Updates specific fields of a joke.

#### URL Parameters

- `id` (string): The unique identifier of the joke.

#### Request Body

- Include only the fields you wish to update.

```json
{
  "name": "Updated Joke Name"
}
```

#### Example Request

```http
PUT http://localhost:3000/api/jokes/672745f174276e0c7e777b08
Content-Type: application/json

{
  "name": "Updated Joke Name"
}
```

#### Example Response

```json
{
  "_id": "672745f174276e0c7e777b08",
  "name": "Updated Joke Name",
  "text": "Original joke text.",
  "providerName": "Original Provider",
  "createdAt": "2024-10-30T10:00:00Z",
  "updatedAt": "2024-10-31T13:00:00Z"
}
```

#### FAQs

1. **Can I update multiple fields at once?**

   Yes, include all the fields you want to update in the request body.

2. **What if I provide a field that doesn't exist?**

   Extra fields will be ignored, and only existing fields will be updated.

3. **Will updating a joke change its ID?**

   No, the joke's ID remains the same after an update.

---

### Delete a Joke

**Method**: `DELETE`

**Endpoint**: `/jokes/{id}`

**Description**: Deletes a joke by its unique ID.

#### URL Parameters

- `id` (string): The unique identifier of the joke.

#### Example Request

```http
DELETE http://localhost:3000/api/jokes/672745f174276e0c7e777b08
```

#### Example Response

```json
{
  "message": "Joke deleted successfully."
}
```

#### FAQs

1. **What happens if I try to delete a joke that doesn't exist?**

   You will receive a 404 Not Found error.

2. **Is this operation reversible?**

   No, once a joke is deleted, it cannot be recovered.

3. **Do I need to provide any body content when deleting a joke?**

   No, the DELETE request does not require a body.

---

## Products API

### Get Specific Product by ID

**Method**: `GET`

**Endpoint**: `/products/{id}`

**Description**: Retrieves a specific product by its unique ID.

#### URL Parameters

- `id` (string): The unique identifier of the product.

#### Example Request

```http
GET http://localhost:3000/api/products/6727492c76ee09ec141e0632
```

#### Example Response

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

#### FAQs

1. **What if the product ID does not exist?**

   You will receive a 404 Not Found error.

2. **Is the product price returned in any specific currency?**

   Prices are in USD by default.

3. **Can I get detailed supplier information?**

   Currently, only the supplier's name is provided.

---

### Get All Products

**Method**: `GET`

**Endpoint**: `/products`

**Description**: Retrieves a list of all products.

#### Example Request

```http
GET http://localhost:3000/api/products
```

#### Example Response

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
  // ... more products
]
```

#### FAQs

1. **Can I filter products by price or availability?**

   Filtering is not currently supported via the API.

2. **Are the products sorted in any particular order?**

   Products are returned in the order they were added to the database.

3. **Is pagination available for the product list?**

   No, all products are returned in a single response.

---

### Create a New Product

**Method**: `POST`

**Endpoint**: `/products`

**Description**: Creates a new product.

#### Request Body

```json
{
  "productTitle": "Smartwatch",
  "productDescription": "Water-resistant smartwatch with fitness tracking.",
  "productPrice": 149.99,
  "availableQuantity": "120",
  "productWarehouse": "Warehouse B",
  "productSupplierName": "Tech Innovators"
}
```

#### Example Request

```http
POST http://localhost:3000/api/products
Content-Type: application/json

{
  "productTitle": "Smartwatch",
  "productDescription": "Water-resistant smartwatch with fitness tracking.",
  "productPrice": 149.99,
  "availableQuantity": "120",
  "productWarehouse": "Warehouse B",
  "productSupplierName": "Tech Innovators"
}
```

#### Example Response

```json
{
  "_id": "6727492c76ee09ec141e0632",
  "productTitle": "Smartwatch",
  "productDescription": "Water-resistant smartwatch with fitness tracking.",
  "productPrice": 149.99,
  "availableQuantity": 120,
  "productWarehouse": "Warehouse B",
  "productSupplierName": "Tech Innovators",
  "createdAt": "2024-10-31T14:00:00Z",
  "updatedAt": "2024-10-31T14:00:00Z"
}
```

#### FAQs

1. **Are all fields required when creating a product?**

   Yes, all fields are required.

2. **Can I input the price in a different currency?**

   No, prices must be provided in USD.

3. **Is there a limit to the product description length?**

   Yes, the `productDescription` field has a maximum length of 1000 characters.

---

### Update a Product

**Method**: `PUT`

**Endpoint**: `/products/{id}`

**Description**: Updates specific fields of a product.

#### URL Parameters

- `id` (string): The unique identifier of the product.

#### Request Body

```json
{
  "productTitle": "Apple Headphones"
}
```

#### Example Request

```http
PUT http://localhost:3000/api/products/6727492c76ee09ec141e0632
Content-Type: application/json

{
  "productTitle": "Apple Headphones"
}
```

#### Example Response

```json
{
  "_id": "6727492c76ee09ec141e0632",
  "productTitle": "Apple Headphones",
  "productDescription": "Water-resistant smartwatch with fitness tracking.",
  "productPrice": 149.99,
  "availableQuantity": 120,
  "productWarehouse": "Warehouse B",
  "productSupplierName": "Tech Innovators",
  "createdAt": "2024-10-31T14:00:00Z",
  "updatedAt": "2024-10-31T15:00:00Z"
}
```

#### FAQs

1. **Can I update the product price and quantity simultaneously?**

   Yes, include both fields in the request body.

2. **What happens if I provide invalid data types?**

   You will receive a 400 Bad Request error indicating the invalid fields.

3. **Does updating the product affect the createdAt timestamp?**

   No, only the `updatedAt` timestamp is modified.

---

### Delete a Product

**Method**: `DELETE`

**Endpoint**: `/products/{id}`

**Description**: Deletes a product by its unique ID.

#### URL Parameters

- `id` (string): The unique identifier of the product.

#### Example Request

```http
DELETE http://localhost:3000/api/products/6727492c76ee09ec141e0632
```

#### Example Response

```json
{
  "message": "Product deleted successfully."
}
```

#### FAQs

1. **Can I delete multiple products at once?**

   No, you can only delete one product per request.

2. **Will deleting a product affect existing orders?**

   This depends on the implementation; currently, the API does not handle orders.

3. **Do I receive confirmation that the product was deleted?**

   Yes, a success message is returned upon deletion.

---

## Users API

### Get Specific User by ID

**Method**: `GET`

**Endpoint**: `/users/{id}`

**Description**: Retrieves a specific user by their unique ID.

#### URL Parameters

- `id` (string): The unique identifier of the user.

#### Example Request

```http
GET http://localhost:3000/api/users/67274bd776ee09ec141e063e
```

#### Example Response

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

#### FAQs

1. **Is the user's password included in the response?**

   No, sensitive information like passwords is not included.

2. **Can I get users by email instead of ID?**

   Currently, you can only retrieve users by their ID.

3. **What if the user ID is invalid?**

   You will receive a 404 Not Found error.

---

### Get All Users

**Method**: `GET`

**Endpoint**: `/users`

**Description**: Retrieves a list of all users.

#### Example Request

```http
GET http://localhost:3000/api/users
```

#### Example Response

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
  // ... more users
]
```

#### FAQs

1. **Is the list of users paginated?**

   No, all users are returned in a single response.

2. **Can I search for users by location?**

   Filtering is not currently supported via the API.

3. **Are users' email addresses included?**

   Yes, the `email` field is included in the response.

---

### Create a New User

**Method**: `POST`

**Endpoint**: `/users`

**Description**: Creates a new user.

#### Request Body

```json
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

#### Example Request

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

#### Example Response

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
  "agreeToTerms": true,
  "createdAt": "2024-10-31T16:00:00Z",
  "updatedAt": "2024-10-31T16:00:00Z"
}
```

#### FAQs

1. **Are all fields required when creating a user?**

   Yes, all fields are required.

2. **What if the email is already in use?**

   The API currently does not check for duplicate emails.

3. **Is age calculated automatically from birthDate?**

   No, you need to provide the `age` field separately.

---

### Update a User

**Method**: `PUT`

**Endpoint**: `/users/{id}`

**Description**: Updates specific fields of a user.

#### URL Parameters

- `id` (string): The unique identifier of the user.

#### Request Body

```json
{
  "fName": "Alicia"
}
```

#### Example Request

```http
PUT http://localhost:3000/api/users/67274bd776ee09ec141e063e
Content-Type: application/json

{
  "fName": "Alicia"
}
```

#### Example Response

```json
{
  "_id": "67274bd776ee09ec141e063e",
  "fName": "Alicia",
  "lName": "Garcia",
  "age": 22,
  "gender": "Female",
  "birthDate": "2002-03-14",
  "location": "Madrid, Spain",
  "email": "emma.garcia@example.com",
  "agreeToTerms": true,
  "createdAt": "2024-10-31T16:00:00Z",
  "updatedAt": "2024-10-31T17:00:00Z"
}
```

#### FAQs

1. **Can I update the user's email?**

   Yes, include the `email` field in the request body to update it.

2. **Do I need to provide all fields when updating?**

   No, include only the fields you wish to update.

3. **Will updating a user notify them via email?**

   No, the API does not send notifications.

---

### Delete a User

**Method**: `DELETE`

**Endpoint**: `/users/{id}`

**Description**: Deletes a user by their unique ID.

#### URL Parameters

- `id` (string): The unique identifier of the user.

#### Example Request

```http
DELETE http://localhost:3000/api/users/67274bd776ee09ec141e063e
```

#### Example Response

```json
{
  "message": "User deleted successfully."
}
```

#### FAQs

1. **Is deleting a user permanent?**

   Yes, this action cannot be undone.

2. **What happens to the user's data after deletion?**

   All user data is removed from the database.

3. **Do I need to provide any authentication to delete a user?**

   No, but in a production environment, authentication would typically be required.
