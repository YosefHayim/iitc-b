# API Documentation

## Introduction

Welcome to the API documentation for managing **Users**, **Projects**, and **Tasks**. This API allows you to create, read, update, and delete users, projects, and tasks. Below you will find detailed information on each endpoint, including required parameters, request examples, expected responses, error handling, and FAQs.

## Base URL

All API requests are prefixed with the following base URL:

```
http://localhost:3000
```

---

## Routes

The API uses the following base routes for different resources:

- **Users Route:** `/api/users`
- **Projects Route:** `/api/projects`
- **Tasks Route:** `/api/tasks`

Each endpoint is built upon these routes. For example, to get all users, the full endpoint is `http://localhost:3000/api/users/users`.

---

## Endpoints

### Users API

**Route:** `/api/users`

---

#### Get All Users

- **Method:** `GET`
- **Endpoint:** `/api/users/users`
- **Description:** Retrieves a list of all users.

**Request:**

```http
GET http://localhost:3000/api/users/users
```

**Response:**

- **Status Code:** `200 OK`
- **Body:**

  ```json
  [
    {
      "_id": "6725139ce5bece56b7bd3045",
      "fName": "John",
      "lName": "Doe",
      "age": 30,
      "birthDate": "1993-05-15T00:00:00Z",
      "location": {
        "city": "New York",
        "state": "NY",
        "country": "USA"
      },
      "email": "john.doe@example.com",
      "role": "Member"
    }
    // ...other users
  ]
  ```

**Errors:**

- **500 Internal Server Error:** Server failed to retrieve users.

**FAQs:**

1. **Q:** Do I need to provide any authentication?
   **A:** No authentication is required for this endpoint.

2. **Q:** Is pagination supported?
   **A:** Currently, pagination is not supported; all users are returned.

3. **Q:** What format is the data returned in?
   **A:** The data is returned in JSON format.

---

#### Get User by ID

- **Method:** `GET`
- **Endpoint:** `/api/users/user/:id`
- **Description:** Retrieves a user by their unique ID.
- **Parameters:**
  - `id` (string, required): The user's unique identifier.

**Request:**

```http
GET http://localhost:3000/api/users/user/6725139ce5bece56b7bd3045
```

**Response:**

- **Status Code:** `200 OK`
- **Body:**

  ```json
  {
    "_id": "6725139ce5bece56b7bd3045",
    "fName": "John",
    "lName": "Doe",
    "age": 30,
    "birthDate": "1993-05-15T00:00:00Z",
    "location": {
      "city": "New York",
      "state": "NY",
      "country": "USA"
    },
    "email": "john.doe@example.com",
    "role": "Member"
  }
  ```

**Errors:**

- **404 Not Found:** User not found.
- **500 Internal Server Error:** Server failed to retrieve the user.

**FAQs:**

1. **Q:** What if I provide an invalid ID?
   **A:** A `404 Not Found` error will be returned.

2. **Q:** Can I search users by email?
   **A:** This endpoint only supports searching by user ID.

3. **Q:** Is the ID case-sensitive?
   **A:** Yes, IDs are case-sensitive.

---

#### Create New User(s)

- **Method:** `POST`
- **Endpoint:** `/api/users/users`
- **Description:** Creates a new user or multiple users.
- **Headers:**
  - `Content-Type: application/json`
- **Body Parameters:**
  - `fName` (string, required): First name.
  - `lName` (string, required): Last name.
  - `age` (number, optional): Age.
  - `birthDate` (string, optional): Birth date in ISO 8601 format.
  - `location` (object, optional):
    - `city` (string, optional)
    - `state` (string, optional)
    - `country` (string, optional)
  - `email` (string, required): Email address.
  - `role` (string, required): User role (e.g., "Member", "Admin").

**Request:**

```http
POST http://localhost:3000/api/users/users
Content-Type: application/json

{
  "fName": "John",
  "lName": "Doe",
  "age": 30,
  "birthDate": "1993-05-15T00:00:00Z",
  "location": {
    "city": "New York",
    "state": "NY",
    "country": "USA"
  },
  "email": "john.doe@example.com",
  "role": "Member"
}
```

**Response:**

- **Status Code:** `201 Created`
- **Body:**

  ```json
  {
    "message": "User created successfully",
    "userId": "generated_user_id"
  }
  ```

**Errors:**

- **400 Bad Request:** Missing required fields or invalid data.
- **500 Internal Server Error:** Server failed to create the user.

**FAQs:**

1. **Q:** Can I create multiple users at once?
   **A:** Yes, by sending an array of user objects in the request body.

2. **Q:** What happens if the email is already in use?
   **A:** A `400 Bad Request` error will be returned indicating email duplication.

3. **Q:** Is age a required field?
   **A:** No, age is optional.

---

#### Partial Update User

- **Method:** `PATCH`
- **Endpoint:** `/api/users/users/:id`
- **Description:** Partially updates a user's information.
- **Parameters:**
  - `id` (string, required): The user's unique identifier.
- **Headers:**
  - `Content-Type: application/json`
- **Body Parameters:** Any user fields that need to be updated.

**Request:**

```http
PATCH http://localhost:3000/api/users/users/6725139ce5bece56b7bd3045
Content-Type: application/json

{
  "fName": "Rachel"
}
```

**Response:**

- **Status Code:** `200 OK`
- **Body:**

  ```json
  {
    "message": "User updated successfully"
  }
  ```

**Errors:**

- **400 Bad Request:** Invalid data.
- **404 Not Found:** User not found.
- **500 Internal Server Error:** Server failed to update the user.

**FAQs:**

1. **Q:** Can I update the user's email?
   **A:** Yes, but ensure the new email is not already in use.

2. **Q:** What happens if I send invalid fields?
   **A:** A `400 Bad Request` error will be returned.

3. **Q:** Do I need to send all user fields?
   **A:** No, only the fields you wish to update.

---

#### Delete User by ID

- **Method:** `DELETE`
- **Endpoint:** `/api/users/users/:id`
- **Description:** Deletes a user by their unique ID.
- **Parameters:**
  - `id` (string, required): The user's unique identifier.

**Request:**

```http
DELETE http://localhost:3000/api/users/users/6725139ce5bece56b7bd3045
```

**Response:**

- **Status Code:** `200 OK`
- **Body:**

  ```json
  {
    "message": "User deleted successfully"
  }
  ```

**Errors:**

- **404 Not Found:** User not found.
- **500 Internal Server Error:** Server failed to delete the user.

**FAQs:**

1. **Q:** Is the deletion permanent?
   **A:** Yes, deletion is permanent and cannot be undone.

2. **Q:** What if I delete a user who is associated with tasks or projects?
   **A:** Ensure to handle associations before deletion to maintain data integrity.

3. **Q:** Do I receive confirmation of deletion?
   **A:** Yes, a success message is returned upon deletion.

---

### Projects API

**Route:** `/api/projects`

---

#### Get All Projects

- **Method:** `GET`
- **Endpoint:** `/api/projects/projects`
- **Description:** Retrieves a list of all projects.

**Request:**

```http
GET http://localhost:3000/api/projects/projects
```

**Response:**

- **Status Code:** `200 OK`
- **Body:** Array of project objects.

**Errors:**

- **500 Internal Server Error:** Server failed to retrieve projects.

**FAQs:**

1. **Q:** Are project details included?
   **A:** Yes, full project details are returned.

2. **Q:** Is there a limit to the number of projects returned?
   **A:** No, all projects are returned.

3. **Q:** Can I filter projects?
   **A:** Filtering is not supported in this endpoint.

---

#### Get Project by ID

- **Method:** `GET`
- **Endpoint:** `/api/projects/project/:id`
- **Description:** Retrieves a project by its unique ID.
- **Parameters:**
  - `id` (string, required): The project's unique identifier.

**Request:**

```http
GET http://localhost:3000/api/projects/project/67252660e25dca71c6479b8d
```

**Response:**

- **Status Code:** `200 OK`
- **Body:** Project object.

**Errors:**

- **404 Not Found:** Project not found.
- **500 Internal Server Error:** Server failed to retrieve the project.

**FAQs:**

1. **Q:** Can I get a project by name?
   **A:** No, this endpoint only supports retrieval by ID.

2. **Q:** Does it include associated tasks?
   **A:** Associated tasks are not included by default.

3. **Q:** Is the project ID case-sensitive?
   **A:** Yes, it is case-sensitive.

---

#### Create New Project(s)

- **Method:** `POST`
- **Endpoint:** `/api/projects/projects`
- **Description:** Creates a new project or multiple projects.
- **Headers:**
  - `Content-Type: application/json`
- **Body Parameters:**
  - `name` (string, required): Project name.
  - `description` (string, optional): Project description.
  - `status` (string, optional): Project status (e.g., "In Progress", "Completed").

**Request:**

```http
POST http://localhost:3000/api/projects/projects
Content-Type: application/json

{
  "name": "Project Alpha",
  "description": "This is a test project description.",
  "status": "In Progress"
}
```

**Response:**

- **Status Code:** `201 Created`
- **Body:**

  ```json
  {
    "message": "Project created successfully",
    "projectId": "generated_project_id"
  }
  ```

**Errors:**

- **400 Bad Request:** Missing required fields or invalid data.
- **500 Internal Server Error:** Server failed to create the project.

**FAQs:**

1. **Q:** Can I create multiple projects at once?
   **A:** Yes, by sending an array of project objects.

2. **Q:** Is the `status` field required?
   **A:** No, it defaults to a predefined status if not provided.

3. **Q:** Can I assign users during creation?
   **A:** This endpoint focuses on project creation; user assignments may require a different endpoint.

---

#### Partial Update Project

- **Method:** `PATCH`
- **Endpoint:** `/api/projects/projects/:id`
- **Description:** Partially updates a project's information.
- **Parameters:**
  - `id` (string, required): The project's unique identifier.
- **Headers:**
  - `Content-Type: application/json`
- **Body Parameters:** Any project fields that need to be updated.

**Request:**

```http
PATCH http://localhost:3000/api/projects/projects/67252660e25dca71c6479b8c
Content-Type: application/json

{
  "name": "Charity App Development"
}
```

**Response:**

- **Status Code:** `200 OK`
- **Body:**

  ```json
  {
    "message": "Project updated successfully"
  }
  ```

**Errors:**

- **400 Bad Request:** Invalid data.
- **404 Not Found:** Project not found.
- **500 Internal Server Error:** Server failed to update the project.

**FAQs:**

1. **Q:** Can I update the project's status?
   **A:** Yes, include the `status` field in your request body.

2. **Q:** What if I provide an invalid field?
   **A:** A `400 Bad Request` error will be returned.

3. **Q:** Do I need to send all project fields?
   **A:** No, only include the fields you wish to update.

---

#### Delete Project by ID

- **Method:** `DELETE`
- **Endpoint:** `/api/projects/projects/:id`
- **Description:** Deletes a project by its unique ID.
- **Parameters:**
  - `id` (string, required): The project's unique identifier.

**Request:**

```http
DELETE http://localhost:3000/api/projects/projects/67252660e25dca71c6479b8e
```

**Response:**

- **Status Code:** `200 OK`
- **Body:**

  ```json
  {
    "message": "Project deleted successfully"
  }
  ```

**Errors:**

- **404 Not Found:** Project not found.
- **500 Internal Server Error:** Server failed to delete the project.

**FAQs:**

1. **Q:** Are associated tasks also deleted?
   **A:** Deleting a project does not automatically delete associated tasks unless specified.

2. **Q:** Is the deletion permanent?
   **A:** Yes, it is permanent.

3. **Q:** Do I receive confirmation?
   **A:** Yes, a success message is returned.

---

### Tasks API

**Route:** `/api/tasks`

---

#### Get All Tasks

- **Method:** `GET`
- **Endpoint:** `/api/tasks/tasks`
- **Description:** Retrieves a list of all tasks.

**Request:**

```http
GET http://localhost:3000/api/tasks/tasks
```

**Response:**

- **Status Code:** `200 OK`
- **Body:** Array of task objects.

**Errors:**

- **500 Internal Server Error:** Server failed to retrieve tasks.

**FAQs:**

1. **Q:** Are task details included?
   **A:** Yes, full task details are returned.

2. **Q:** Can I filter tasks?
   **A:** Filtering is not supported in this endpoint.

3. **Q:** Is pagination available?
   **A:** No, all tasks are returned.

---

#### Get Task by ID

- **Method:** `GET`
- **Endpoint:** `/api/tasks/task/:id`
- **Description:** Retrieves a task by its unique ID.
- **Parameters:**
  - `id` (string, required): The task's unique identifier.

**Request:**

```http
GET http://localhost:3000/api/tasks/task/67252197a93f1285b915fb40
```

**Response:**

- **Status Code:** `200 OK`
- **Body:** Task object.

**Errors:**

- **404 Not Found:** Task not found.
- **500 Internal Server Error:** Server failed to retrieve the task.

**FAQs:**

1. **Q:** Can I get a task by title?
   **A:** This endpoint only supports retrieval by ID.

2. **Q:** Does it include the assigned user?
   **A:** Assigned user information is included if available.

3. **Q:** Is the task ID case-sensitive?
   **A:** Yes, it is case-sensitive.

---

#### Create New Task(s)

- **Method:** `POST`
- **Endpoint:** `/api/tasks/tasks`
- **Description:** Creates a new task or multiple tasks.
- **Headers:**
  - `Content-Type: application/json`
- **Body Parameters:**
  - `title` (string, required): Task title.
  - `description` (string, optional): Task description.
  - `status` (string, optional): Task status (e.g., "In Progress", "Completed").
  - `dueDate` (string, optional): Due date in ISO 8601 format.

**Request:**

```http
POST http://localhost:3000/api/tasks/tasks
Content-Type: application/json

{
  "title": "Complete Documentation",
  "description": "Write documentation for the new API endpoints",
  "status": "In Progress",
  "dueDate": "2024-12-15T00:00:00Z"
}
```

**Response:**

- **Status Code:** `201 Created`
- **Body:**

  ```json
  {
    "message": "Task created successfully",
    "taskId": "generated_task_id"
  }
  ```

**Errors:**

- **400 Bad Request:** Missing required fields or invalid data.
- **500 Internal Server Error:** Server failed to create the task.

**FAQs:**

1. **Q:** Can I assign a task to a user during creation?
   **A:** This endpoint focuses on task creation; assigning may require a different endpoint.

2. **Q:** Is `status` required?
   **A:** No, it defaults to a predefined status if not provided.

3. **Q:** Can I create multiple tasks at once?
   **A:** Yes, by sending an array of task objects.

---

#### Partial Update Task

- **Method:** `PATCH`
- **Endpoint:** `/api/tasks/tasks/:id`
- **Description:** Partially updates a task's information.
- **Parameters:**
  - `id` (string, required): The task's unique identifier.
- **Headers:**
  - `Content-Type: application/json`
- **Body Parameters:** Any task fields that need to be updated.

**Request:**

```http
PATCH http://localhost:3000/api/tasks/tasks/67252197a93f1285b915fb40
Content-Type: application/json

{
  "title": "Go with granny to a restaurant"
}
```

**Response:**

- **Status Code:** `200 OK`
- **Body:**

  ```json
  {
    "message": "Task updated successfully"
  }
  ```

**Errors:**

- **400 Bad Request:** Invalid data.
- **404 Not Found:** Task not found.
- **500 Internal Server Error:** Server failed to update the task.

**FAQs:**

1. **Q:** Can I update the `dueDate`?
   **A:** Yes, include the `dueDate` field in your request body.

2. **Q:** What if I provide an invalid date format?
   **A:** A `400 Bad Request` error will be returned.

3. **Q:** Do I need to send all task fields?
   **A:** No, only include the fields you wish to update.

---

#### Delete Task by ID

- **Method:** `DELETE`
- **Endpoint:** `/api/tasks/tasks/:id`
- **Description:** Deletes a task by its unique ID.
- **Parameters:**
  - `id` (string, required): The task's unique identifier.

**Request:**

```http
DELETE http://localhost:3000/api/tasks/tasks/67252197a93f1285b915fb40
```

**Response:**

- **Status Code:** `200 OK`
- **Body:**

  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

**Errors:**

- **404 Not Found:** Task not found.
- **500 Internal Server Error:** Server failed to delete the task.

**FAQs:**

1. **Q:** Is the deletion permanent?
   **A:** Yes, deletion is permanent.

2. **Q:** What if the task is associated with a project?
   **A:** Ensure to handle associations before deletion.

3. **Q:** Do I receive confirmation?
   **A:** Yes, a success message is returned.

---

## Error Handling

For all endpoints, standard HTTP status codes are used to indicate the success or failure of an API request:

- **200 OK:** The request was successful.
- **201 Created:** The resource was successfully created.
- **400 Bad Request:** The request was invalid or cannot be served.
- **404 Not Found:** The requested resource could not be found.
- **500 Internal Server Error:** An error occurred on the server.
