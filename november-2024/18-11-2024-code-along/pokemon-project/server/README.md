# 29-11-2024 Pokemon Project API Documentation

## Introduction

This document provides an overview of the API endpoints available in the **29-11-2024 Pokemon Project**. Additionally, the project utilizes the following libraries to implement key features:

- **bcrypt** (`^5.1.1`): For hashing passwords securely.
- **cookie-parser** (`^1.4.7`): To parse cookies for session handling.
- **cors** (`^2.8.5`): To handle Cross-Origin Resource Sharing.
- **dotenv** (`^16.4.5`): To manage environment variables.
- **express** (`^4.21.1`): For building the server and routing.
- **jsonwebtoken** (`^9.0.2`): For generating and verifying JWT tokens.
- **mongoose** (`^8.8.3`): For interacting with the MongoDB database.
- **morgan** (`^1.10.0`): For logging HTTP requests.

These libraries are integral to the functionality of the API. Refer to their official documentation for more detailed usage and implementation details.

---

## Base URL

`http://localhost:3000/`

---

## Endpoints

### 1. Users

#### GET: Get All Users

- **Endpoint**: `/users/all`
- **Full URL**: `http://localhost:3000/users/all`
- **Description**: Retrieves a list of all registered users.
- **Response**: JSON object containing user data.

#### GET: Onboard Server

- **Endpoint**: `/`
- **Full URL**: `http://localhost:3000/`
- **Description**: Confirms the server is running and accessible.
- **Response**: Server status message.

#### POST: Register User

- **Endpoint**: `/users/register`
- **Full URL**: `http://localhost:3000/users/register`
- **Description**: Registers a new user in the system.
- **Body Format**:
  ```json
  {
    "email": "example@gmail.com",
    "password": "password123",
    "fName": "First Name",
    "lName": "Last Name"
  }
  ```
- **Response**: Success message or error details.

#### POST: Login User

- **Endpoint**: `/users/login`
- **Full URL**: `http://localhost:3000/users/login`
- **Description**: Authenticates a user with their email. Upon successful login, a JWT token is generated and stored in the cookie for session management.
- **Body Format**:
  ```json
  {
    "email": "example@gmail.com"
  }
  ```
- **Response**: Authentication token or error details.

---

### 2. Pokemons

#### POST: Create Pokemon

- **Endpoint**: `/pokemons/create`
- **Full URL**: `http://localhost:3000/pokemons/create`
- **Description**: Adds a new Pokemon to the system. _Note: Not yet implemented._
- **Body Format**:
  ```json
  {
    "Still not implemented": "None"
  }
  ```
- **Response**: Not applicable (to be implemented).

---

## Notes

- Ensure the server is running on `http://localhost:3000/` before testing any endpoints.
- Use appropriate headers such as `Content-Type: application/json` for POST requests.
- A JWT token is provided upon successful login and stored in the cookie for secure session handling.
- This API documentation will evolve as new features are added.
