Authentication and User Management Backend

This module provides secure authentication and role-based user management for the EventFlow application. It is responsible for handling user registration, login, and protected API access using JSON Web Tokens (JWT).

🚀 Features

User registration (Signup)

User authentication (Login)

Role-based access control (Admin / Student / Volunteer)

Secure password hashing using bcrypt

Token-based authentication using JWT

Protected routes with middleware

🛠️ Technology Stack

Node.js

Express.js

MongoDB

JSON Web Token (JWT)

bcrypt

⚙️ Setup and Installation

Navigate to the auth-system directory:

cd auth-system

Install dependencies:

npm install

Create a .env file and configure environment variables:

DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000

Start the server:

npm start

The server will run on:

http://localhost:5000
🔑 API Endpoints

POST /signup – Register a new user

POST /login – Authenticate user and generate JWT

GET /profile – Fetch authenticated user profile

GET /users – Admin-only route to fetch all users

📁 Project Structure

config/ – Database configuration

models/ – Database schemas

routes/ – API route definitions

middleware/ – Authentication and authorization middleware

server.js – Application entry point
