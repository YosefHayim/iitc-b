## **API Documentation**

## **Users**

### **GET /users**

- **Description**: Retrieves all users from the database.

- **Route**: `/users`

- **Method**: `GET`

- **Authentication**: Requires Bearer token authentication.

- **Response**:

  - **200 OK**: Returns an array of users.
  - **401 Unauthorized**: If the user is not authenticated.

- **Example Request**:

```
 GET /users
  Authorization: Bearer <token>
```

- **Example Response**:

```json
  "users": [
        {
            "_id": "6750751f5ab0a5d8a6c9fc9e",
            "username": "test",
            "password": "$2b$10$hxO.C927N4OIuWAqxcrWXORALcSHiws3ov4jMqcqmfImtJLqKonEG",
            "email": "test",
            "savedPosts": [],
            "createdAt": "2024-12-04T15:28:31.705Z",
            "updatedAt": "2024-12-04T15:28:31.705Z"
        },
        ...more users
]
```

---

### **GET /users/data**

- **Description**: Retrieves details of the logged user.

- **Route**: `/users/data`

- **Method**: `GET`

- **Authentication**: Requires Bearer token authentication.

- **Response**:

  - **200 OK**: Returns the user details.
  - **404 Not Found**: If the user does not exist.

- **Example Request**:

```
  GET /users/data
```

- **Example Response**:

```json
{
    "user": {
        "_id": "6750751f5ab0a5d8a6c9fc9e",
        "username": "test",
        "password": "$2b$10$hxO.C927N4OIuWAqxcrWXORALcSHiws3ov4jMqcqmfImtJLqKonEG",
        "email": "test",
        "savedPosts": [],
        "createdAt": "2024-12-04T15:28:31.705Z",
        "updatedAt": "2024-12-04T15:28:31.705Z"
    },
   "Posts": [
        {
            "_id": "67507cbc5e3a3b992571fc61",
            "postImageUrl": "https://picsum.photos/seed/JskVNm/500/500"
        },
      ...more posts
    ],
    "followers": [
        {
            "_id": "67507cbc5e3a3b992571fc73",
            "followerId": "67507cbc5e3a3b992571fc53"
        },
       ...more followers
    ],
    "following": [
        {
            "_id": "67507cbc5e3a3b992571fc6e",
            "userId": "67507cbc5e3a3b992571fc52"
        },
       ...more following
    ]
}
```

---

### **GET /users/data/:id**

- **Description**: Retrieves details of a single user by ID.

- **Route**: `/users/data/:id`

- **Method**: `GET`

- **Path Parameters**:

  - `id` (string, required): MongoDB Object ID of the user.

- **Response**:

  - **200 OK**: Returns the user details.
  - **404 Not Found**: If the user does not exist.

- **Example Request**:

```
  GET /users/data/67507cbc5e3a3b992571fc4d
```

- **Example Response**:

```json
{
    "user": {
        "_id": "67507cbc5e3a3b992571fc4d",
        "displayName": "Sandra Brown",
        "username": "Eldred_W",
        "password": "JfT71AGFQDZ8lNg",
        "email": "Kendall_Ward12@hotmail.com",
        "role": "Member",
        "profilePic": "https://loremflickr.com/500/500?lock=2899199103752132",
        "savedPosts": [],
        "createdAt": "2024-12-04T16:01:00.492Z",
        "updatedAt": "2024-12-04T16:01:00.492Z"
    },
    "Posts": [
        {
            "_id": "67507cbc5e3a3b992571fc61",
            "postImageUrl": "https://picsum.photos/seed/JskVNm/500/500"
        },
      ...more posts
    ],
    "followers": [
        {
            "_id": "67507cbc5e3a3b992571fc73",
            "followerId": "67507cbc5e3a3b992571fc53"
        },
       ...more followers
    ],
    "following": [
        {
            "_id": "67507cbc5e3a3b992571fc6e",
            "userId": "67507cbc5e3a3b992571fc52"
        },
       ...more following
    ]
}
```

---

### **POST /users/signup**

- **Description**: Creates a new user with the specified details.

- **Route**: `/users/signup`

- **Method**: `POST`

- **Request Body**:

  - `username` (string, required): The username of the user.
  - `password` (string, required): The password of the user.
  - `displayName` (string,optional): The display name of the user.
  - `email` (string,optional): The email address of the user.
  - `role` (string, optional): The role of the user (e.g., "admin", "user").
  - `profilePic` (string, optional): The URL of the user's profile image.

- **Response**:

  - **201 Created**: Returns the created user.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```json
  POST /users
  Content-Type: application/json
  Body:
  {
    "username": "john_doe",
    "password": "password123",
    "displayName": "John Doe", // optional
    "email": "john.doe@example.com", // optional
    "role": "user", // optional
    "imageUrl": "http://example.com/john.jpg" // optional
  }
```

- **Example Response**:

```json
{
  "mongoMessage": {
    "username": "test55",
    "password": "$2b$10$Mz8gwAe6qzVNn/vmGde20OvSMexFHoWVzK5.QAOaaj/hYNMKJpJMm",
    "email": "test55",
    "savedPosts": [],
    "_id": "6750ac1070f5b1187709ad1b",
    "createdAt": "2024-12-04T19:22:56.020Z",
    "updatedAt": "2024-12-04T19:22:56.020Z"
  }
}
```

---

### **POST /users/login**

- **Description**: Authenticates a user and generates a JWT token.

- **Route**: `/users/login`

- **Method**: `POST`

- **Request Body**:

  - `username` (string, required): The username of the user.
  - `password` (string, required): The password of the user.

- **Response**:

  - **200 OK**: Returns the authentication token and a success message.
  - **400 Bad Request**: If the username or password is invalid.

- **Example Request**:

```
 POST /users/login
  Content-Type: application/json
  Body:
  {
    "username": "test",
    "password": "123456"
  }
```

- **Example Response**:

```json
{
  "message": "User test logged in successfully.",
  "token": "<JWT token>"
}
```

---

### **POST /users/logout**

- **Description**: Logs the user out by clearing the JWT token from the cookie.

- **Route**: `/users/logout`

- **Method**: `POST`

- **Authentication**: No authentication required.

- **Response**:

  - **200 OK**: Logs the user out by clearing the token cookie.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 POST /users/logout
```

- **Example Response**:

```json
{
  "message": "User logged out successfully."
}
```

---

### **POST /follow/:id**

- **Description**: Allows the logged-in user to follow another user by their unique ID. Creates a new follower record in the database linking the logged-in user (as the follower) to the specified user.

- **Route**: `/users/follow/:id`

- **Method**: `POST`

- **Authentication**: Bearer token containing the logged-in user's JWT.

- **Path Parameters**:

  - `id` (string, required): MongoDB Object ID of the user you want to follow.

- **Response**:

  - **200 OK**: Logs the user out by clearing the token cookie.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 POST /users/follow/:id
```

- **Example Response**:

```json
{
  "message": "Followed successfully!",
  "followerField": {
    "userId": "67507cbc5e3a3b992571fc4f",
    "followerId": "6750751f5ab0a5d8a6c9fc9e",
    "_id": "6750af7dd6b4aee55ef8ce72",
    "followedAt": "2024-12-04T19:37:33.764Z"
  }
}
```

---

## **Posts**

### **GET /posts**

- **Description**: Retrieves all posts with their comments and author details.

- **Route**: `/posts`

- **Method**: `GET`

- **Authentication**: Requires Bearer token authentication.

- **Response**:

  - **200 OK**: Returns an array of posts with nested author and comment details.
  - **401 Unauthorized**: If the user is not authenticated.

- **Example Request**:

```

GET /posts
Authorization: Bearer <token>

```

- **Example Response**:

```json
[
    {
        "_id": "67507cbc5e3a3b992571fc57",
        "title": "Trado coadunatio est avaritia.",
        "content": "Tamisium tollo aegrus.",
        "postImageUrl": "https://loremflickr.com/500/500?lock=2258722980753574",
        "authorId": {
            "_id": "67507cbc5e3a3b992571fc4f",
            "username": "Rickey30",
            "profilePic": "https://picsum.photos/seed/EuU8pmq3/500/500"
        },
        "likedBy": [
            "67507cbc5e3a3b992571fc4c",
          ... more userIds
        ],
        "commentIds": [
            {
                "_id": "67507cbc5e3a3b992571fcc7",
                "parentPostId": "67507cbc5e3a3b992571fc58",
                "commentContent": "cupressus sufficio",
                "likedBy": [],
                "authorId": {
                    "_id": "67507cbc5e3a3b992571fc4f",
                    "username": "Rickey30",
                    "profilePic": "https://picsum.photos/seed/EuU8pmq3/500/500"
                },
                "createdAt": "2024-12-04T16:01:00.914Z",
                "updatedAt": "2024-12-04T18:49:34.403Z",
                "likesCount": 0,
                "id": "67507cbc5e3a3b992571fcc7"
            },
            ...more comments
        ],
        "createdAt": "2024-12-04T16:01:00.635Z",
        "updatedAt": "2024-12-04T18:48:10.680Z",
        "likesCount": 7,
        "id": "67507cbc5e3a3b992571fc57"
    },
    ... more posts
    ]
```

---

### **GET /posts/:postId**

- **Description**: Retrieves details of a single post by ID, including its author and comments.

- **Route**: `/posts/:postId`

- **Method**: `GET`

- **Authentication**: Requires Bearer token authentication.

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Response**:

  - **200 OK**: The post details, including author and comments.
  - **404 Not Found**: If the post does not exist.

- **Example Request**:

```

GET /posts/67507cbc5e3a3b992571fc57
Authorization: Bearer <token>`

```

- **Example Response**:

```json

{
    "post": {
        "_id": "67507cbc5e3a3b992571fc57",
        "title": "Trado coadunatio est avaritia.",
        "content": "Tamisium tollo aegrus.",
        "postImageUrl": "https://loremflickr.com/500/500?lock=2258722980753574",
        "authorId": "67507cbc5e3a3b992571fc4f",
        "likedBy": [
            "67507cbc5e3a3b992571fc4c",
          ...more userIds
        ],
        "commentIds": [
            {
                "_id": "67507cbc5e3a3b992571fcc7",
                "parentPostId": "67507cbc5e3a3b992571fc58",
                "commentContent": "cupressus sufficio",
                "likedBy": [],
                "authorId": "67507cbc5e3a3b992571fc4f",
                "createdAt": "2024-12-04T16:01:00.914Z",
                "updatedAt": "2024-12-04T18:49:34.403Z",
                "likesCount": 0,
                "id": "67507cbc5e3a3b992571fcc7"
            },
           ...more comments
        ],
        "createdAt": "2024-12-04T16:01:00.635Z",
        "updatedAt": "2024-12-04T18:48:10.680Z",
        "likesCount": 7,
        "id": "67507cbc5e3a3b992571fc57"
    }
}

```

---

### **POST /posts**

- **Description**: Creates a new post.

- **Route**: `/posts`

- **Method**: `POST`

- **Authentication**: Requires Bearer token authentication.

- **Request Body**:

  - `title` (string, required): The title of the post.
  - `content` (string, required): The content of the post.
  - `postImageUrl` (string, optional): URL of the post's image.

- **Response**:

  - **200 OK**: The newly created post.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```json

POST /posts
Authorization: Bearer <token>
Content-Type: application/json
Body:
{
  "title": "test",
  "content": "test2",
  "postImageUrl": "http://example.com/image.jpg" // optional
}

```

- **Example Response**:

```json
{
  "message": {
    "title": "test",
    "content": "test2",
    "authorId": "6750751f5ab0a5d8a6c9fc9e",
    "postImageUrl": "http://example.com/image.jpg",
    "likedBy": [],
    "commentIds": [],
    "_id": "6750b1273089dc2884e6879a",
    "createdAt": "2024-12-04T19:44:39.158Z",
    "updatedAt": "2024-12-04T19:44:39.158Z",
    "likesCount": 0, // virtual counting 'likedBy' array
    "id": "6750b1273089dc2884e6879a" // mongoose default virtual id backup
  }
}
```

---

### **POST /posts/:postId/like**

- **Description**: Likes a specific post.

- **Route**: `/posts/:postId/like`

- **Method**: `POST`

- **Authentication**: Requires Bearer token authentication.

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Response**:

  - **200 OK**: Post liked successfully.
  - **404 Not Found**: If the post does not exist.
  - **400 Bad Request**: If the user has already liked the post.

- **Example Request**:

```

`POST: /posts/67507cbc5e3a3b992571fc57/like

Authorization: Bearer <token>`

```

- **Example Response**:

```json
{
    "message": "Post liked successfully",
    "post": {
        "_id": "67507cbc5e3a3b992571fc57",
        "title": "Trado coadunatio est avaritia.",
        "content": "Tamisium tollo aegrus.",
        "postImageUrl": "https://loremflickr.com/500/500?lock=2258722980753574",
        "authorId": "67507cbc5e3a3b992571fc4f",
        "likedBy": [
            "67507cbc5e3a3b992571fc4c",
            ...more userIds
        ],
        "commentIds": [
            "67507cbc5e3a3b992571fcc7",
            ...more commentIds
        ],
        "createdAt": "2024-12-04T16:01:00.635Z",
        "updatedAt": "2024-12-04T19:54:19.048Z",
        "likesCount": 8,
        "id": "67507cbc5e3a3b992571fc57"
    }
}
```

---

### **POST /posts/:postId/save**

- **Description**: Saves a specific post to the user's saved posts list.

- **Route**: `/posts/:postId/save`

- **Method**: `POST`

- **Authentication**: Requires Bearer token authentication.

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Response**:

  - **200 OK**: Post saved successfully.
  - **404 Not Found**: If the post does not exist.
  - **400 Bad Request**: If the user has already saved the post.

- **Example Request**:

```

POST /posts/67507cbc5e3a3b992571fc57/save
Authorization: Bearer <token>

```

- **Example Response**:

```json
{
  "message": "Post saved successfully",
  "user": {
    "_id": "6750751f5ab0a5d8a6c9fc9e",
    "username": "test",
    "password": "$2b$10$hxO.C927N4OIuWAqxcrWXORALcSHiws3ov4jMqcqmfImtJLqKonEG",
    "email": "test",
    "savedPosts": [
      "67507cbc5e3a3b992571fc57" // Newly saved post
    ],
    "createdAt": "2024-12-04T15:28:31.705Z",
    "updatedAt": "2024-12-04T19:56:11.285Z"
  }
}
```

## **Comments**

### **GET /api/comments/:postId**

- **Description**: Retrieves all comments for a specific post by its ID.

- **Route**: `/api/comments/:postId`

- **Method**: `GET`

- **Authentication**: No authentication required.

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Response**:

  - **200 OK**: An array of comments for the specified post.

- **Example Request**:

```
 GET /api/comments/674444e4810707ebc8505bb2
```

- **Example Response**:

```json
{
  "postId": "674444e4810707ebc8505bb2",
  "comments": [
    {
      "_id": "674466c3ab88a86725c6c0a8",
      "parentPostId": "674444e4810707ebc8505bb2",
      "commentContent": "This is a comment",
      "likedBy": ["67432e35d9cabb6b21047e40"],
      "authorId": "67432e35d9cabb6b21047e40",
      "createdAt": "2024-12-03T11:17:05.921Z",
      "updatedAt": "2024-12-03T11:17:05.921Z",
      "likesCount": 1
    }
  ]
}
```

---

### **POST /api/comments/:postId**

- **Description**: Adds a new comment to a specific post.

- **Route**: `/api/comments/:postId`

- **Method**: `POST`

- **Authentication**: Requires authentication (user must be logged in).

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Request Body**:

  - `content` (string, required): The content of the comment.

- **Response**:

  - **200 OK**: The newly created comment and the updated post.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 POST /api/comments/674444e4810707ebc8505bb2
  Authorization: Bearer <token>
  Content-Type: application/json
  Body:
  {
    "content": "This is a new comment"
  }
```

- **Example Response**:

```json
    {
    "yourComment": "This is a new comment",
    "parentPost": {
        "_id": "67507cbc5e3a3b992571fc57",
        ...other comment variables
    }
}
```

### **POST /api/comments/like/:commentId**

- **Description**: Like/Unlike a comment.

- **Route**: `/api/comments/like/:commentId`

- **Method**: `POST`

- **Authentication**: Requires authentication (user must be logged in).

- **Path Parameters**:

  - `commentId` (string, required): MongoDB Object ID of the comment.

- **Response**:

  - **200 OK**: The newly created comment and the updated post.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 POST /api/comments/67507cbc5e3a3b992571fcc7
  Authorization: Bearer <token>
  Content-Type: application/json
```

- **Example Response**:

##### If user already likes the comment:

```json
   {
    "textMessage": "The user already likes this comment. The like will be removed",
    "message": {
        "_id": "67507cbc5e3a3b992571fcc7",
       ...other comment variables
    }
}
```

##### If user doesn't like the comment yet:

```json
{
  "textMessage": "Liked comment successfully",
  "message": {
    "_id": "67507cbc5e3a3b992571fcc0",
   ...other comment variables
  }
}
```

---

### **POST /api/comments/:postId**

- **Description**: Adds a new comment to a specific post.

- **Route**: `/api/comments/:postId`

- **Method**: `POST`

- **Authentication**: Requires authentication (user must be logged in).

- **Path Parameters**:

  - `postId` (string, required): MongoDB Object ID of the post.

- **Request Body**:

  - `content` (string, required): The content of the comment.

- **Response**:

  - **200 OK**: The newly created comment and the updated post.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 POST /api/comments/674444e4810707ebc8505bb2
  Authorization: Bearer <token>
  Content-Type: application/json
  Body:
  {
    "content": "This is a new comment"
  }
```

- **Example Response**:

```json
    {
    "yourComment": "This is a new comment",
    "parentPost": {
        "_id": "67507cbc5e3a3b992571fc57",
        ...other comment variables
    }
}
```

### **PUT /api/comments/:commentId**

- **Description**:Updates a single comment.

- **Route**: `/api/comments/:commentId`

- **Method**: `PUT`

- **Authentication**: Requires authentication (user must be logged in).
  Comment must belong to the user trying to update it.

- **Path Parameters**:

  - `commentId` (string, required): MongoDB Object ID of the comment.

- **Request Body**:

  - `content` (string, required): The content of the comment.

- **Response**:

  - **201 OK**: The updated comment.
  - **404 ERROR**:The user doesn't exist.
  - **404 ERROR**:The commnet doesn't belong to the user.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 PUT /api/comments/67515d2a15c61d3f9a201368
  Authorization: Bearer <token>
  Content-Type: application/json
  Body:{
    "content":"this is the updated comment"
  }
```

- **Example Response**:

##### If the comment exists:

```json
{
  "message": "Comment updated successfully!",
  "updatedComment": {
      "_id": "6755bcb58a5b3b5ad9a458e0",
      "parentPostId": "6755bc8d8a5b3b5ad9a458dd",
      "commentContent": "baba tantum baiulus quack",
      "likedBy": [],
      "authorId": "6751b07209bc1e487947ac2c",
      "createdAt": "2024-12-08T15:35:17.428Z",
      "updatedAt": "2024-12-08T15:35:57.472Z",
      "likesCount": 0,
      "id": "6755bcb58a5b3b5ad9a458e0"
  }
}
```

##### If the comment doesn't exist:

```json
{
  "message": "Comment doesn't exist"
}
```

### **DELETE /api/comments/:commentId**

- **Description**:Delete a single comment.

- **Route**: `/api/comments/:commentId`

- **Method**: `DELETE`

- **Authentication**: Requires authentication (user must be logged in).
  Comment must belong to the user trying to delete it.

- **Path Parameters**:

  - `commentId` (string, required): MongoDB Object ID of the comment.

- **Response**:

  - **200 OK**: The newly created comment and the updated post.
  - **400 ERROR**:The comment doesn't exist.
  - **500 Internal Server Error**: If an error occurs during the process.

- **Example Request**:

```
 DELETE /api/comments/67515d2a15c61d3f9a201368
  Authorization: Bearer <token>
  Content-Type: application/json
```

- **Example Response**:

##### If the comment exists:

```json
{
  "message": "Message deleted successfully",
  "comment": {
    "acknowledged": true,
    "deletedCount": 1
  }
}
```

##### If the comment doesn't exist:

```json
{
  "message": "Comment doesn't exist"
}
```

---
