Authentication and User Management Backend

This module implements a secure authentication and user management system for the EventFlow application. It provides APIs for user registration, authentication, and role-based authorization using industry-standard security practices.

The system ensures confidentiality and integrity of user credentials through password hashing and token-based authentication mechanisms.

Functionalities

User registration (Signup)

User authentication (Login)

Role-based access control (Admin, Student, Volunteer)

Secure password encryption using bcrypt

JWT-based session management

Middleware-based route protection

Technologies Used

Node.js

Express.js

MongoDB

JSON Web Token (JWT)

bcrypt

System Configuration

Create a .env file with the following parameters:

DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
Execution Steps
cd auth-system
npm install
npm start

Server runs at:

http://localhost:5000
API Specification
Method	Endpoint	Description
POST	/signup	Register a new user
POST	/login	Authenticate user
GET	/profile	Get logged-in user profile
GET	/users	Admin-only user listing
Project Structure

config/ – Database configuration

models/ – Data models

routes/ – API routes

middleware/ – Authentication middleware

server.js – Server entry point
