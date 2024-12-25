### Project Title:

**Business Finder Platform**

---

### Tech Stack

#### **Frontend**

- TypeScript
- React
- Tailwind CSS
- Tanstack Query
- Axios

#### **Backend**

- Node.js
- Express
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)

---

### General Overview

Create a full-stack web application where users can find and interact with businesses.

#### **Users can:**

- Browse businesses without signing in.
- Save (like) businesses.
- Leave reviews (comments).
- Subscribe to businesses for notifications about updates or deletions.

#### **Business owners can:**

- Perform CRUD operations on their businesses.
- Notify subscribers of updates or deletions.
- Manage businesses based on their selected plan.

---

### Roles and Permissions

#### **Guest User (Not Signed In):**

- Can browse businesses and view details.
- Cannot save, review, or subscribe to businesses.

#### **Authenticated User:**

- Can save businesses.
- Can leave reviews.
- Can subscribe to businesses for updates.
- Cannot perform CRUD operations on businesses unless a business owner.

#### **Business Owner:**

- Can create businesses based on their selected plan:
  - **Standard Plan:** 1 business (Default, free).
  - **Gold Plan:** Up to 3 businesses.
  - **Platinum Plan:** Up to 10 businesses.
- Can perform CRUD operations on their businesses.
- Cannot save or subscribe to their own businesses.

---

### Key Features

#### 1. **User Authentication**

- Use JWT for secure login and signup.
- Allow users to select a plan during signup: **Standard**, **Gold**, or **Platinum**.

#### 2. **Business Management**

- **Business Schema (Mongoose):**
  - Includes fields like name, description, category, owner, subscribers, reviews, and timestamps.

#### 3. **User Management**

- **User Schema (Mongoose):**
  - Includes fields like name, email, password, plan, and saved businesses.

#### 4. **Subscriptions and Notifications**

- Notify users when:
  - A business is updated.
  - A business is deleted.

#### 5. **Search and Filter**

- Allow filtering businesses by:
  - Name (partial match).
  - Description (partial match).

#### 6. **Reviews**

- Authenticated users can leave comments on businesses.
- Display all reviews under business details.

#### 7. **Responsive Design**

- Use Tailwind CSS for a fully responsive layout on all devices.

#### 8. **API Design**

**Authentication:**

- `POST /auth/signup`
- `POST /auth/login`
- `POST /auth/logout`

**Businesses:**

- `GET /businesses` (public, with filter)
- `POST /businesses` (authenticated)
- `PUT /businesses/:id` (authenticated, owner only)
- `DELETE /businesses/:id` (authenticated, owner only)

**Subscriptions:**

- `POST /businesses/:id/subscribe`
- `DELETE /businesses/:id/unsubscribe`

**Reviews:**

- `POST /businesses/:id/review`
- `GET /businesses/:id/reviews`

---

### Bonus Features

- **Plan Upgrading:**

  - Allow users to upgrade their plans.
  - Enforce business limits based on the new plan.

- **Real-Time Notifications:**

  - Use WebSockets for real-time updates for subscribers.

- **Admin Role:**
  - Moderate reviews and manage businesses.
