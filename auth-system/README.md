# **Authentication and User Management Backend**

This module provides secure authentication and role-based user management for the **EventFlow** application.  
It handles user registration, login, and protected API access using **JSON Web Tokens (JWT)**.

---

## **Features**
- User Registration (Signup)
- User Authentication (Login)
- Role-Based Access Control (Admin / Student / Volunteer)
- Secure Password Hashing using bcrypt
- Token-Based Authentication using JWT
- Protected Routes using Middleware

---

## **Technology Stack**
- Node.js  
- Express.js  
- MongoDB  
- JSON Web Token (JWT)  
- bcrypt  

---

## **Setup and Installation**

### Navigate to project directory:
```bash
cd auth-system
Install dependencies:
npm install
Create a .env file:
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
Start the server:
npm start

Server will run at:

http://localhost:5000
API Endpoints
Register User

POST /signup

Request Body (JSON):


Login User

POST /login

Request Body (JSON):



Response:


Get User Profile

GET /profile

Header:

Authorization: Bearer JWT_TOKEN_HERE
Get All Users (Admin Only)

GET /users

Header:

Authorization: Bearer JWT_TOKEN_HERE
Project Structure
auth-system/
│── config/        → Database configuration  
│── models/        → Database schemas  
│── routes/        → API route definitions  
│── middleware/    → Authentication and role middleware  
│── server.js      → Application entry point
