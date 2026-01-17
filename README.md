📘 Learning Management System (LMS) — Backend

Node.js | Express.js | MongoDB | JWT Authentication

A backend-focused Learning Management System (LMS) designed to manage users, courses, and learning resources through a secure, scalable RESTful API. This system demonstrates real-world backend architecture, authentication workflows, and structured API design suitable for integration with a frontend client.

🧠 Overview

This project implements the backend of a Learning Management System, handling:

✔ Secure user authentication and authorization
✔ User and course management
✔ Role-based access control (Admin / User)
✔ Clean RESTful API structure
✔ Scalable backend architecture

The system is built to support frontend applications (e.g., React) that consume its APIs for educational platforms, training systems, or internal learning tools.

🚀 Features
🔐 Authentication & Authorization

JWT-based authentication

Password hashing for security

Protected routes using middleware

Role-based access for admins and users

📚 Course Management

Admins can create, update, and delete courses

Users can view available courses

Structured course data stored in MongoDB

👥 User Management

User registration and login

Secure access to protected endpoints

Profile-based data handling

🧩 Tech Stack
Layer	Technology
Runtime	Node.js
Framework	Express.js
Database	MongoDB (Mongoose)
Authentication	JWT
Security	bcrypt
API Testing	Postman
Version Control	Git & GitHub
📁 Project Structure
lms-backend/
├ controllers/
├ middleware/
├ models/
├ routes/
├ utils/
├ .env
├ server.js
└ README.md


Each layer is separated to maintain clean architecture and ease of maintenance.

🔧 Getting Started
Prerequisites

Node.js installed

MongoDB connection (local or cloud)

Installation

Clone the repository

git clone https://github.com/Rihofficial/lms-backend.git
cd lms-backend


Install dependencies

npm install


Create a .env file

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret


Start the server

npm start

📜 API Endpoints
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and receive JWT
📚 Courses
Method	Endpoint	Description
POST	/api/courses	Create a course (Admin only)
GET	/api/courses	Get all courses
PUT	/api/courses/:id	Update course (Admin only)
DELETE	/api/courses/:id	Delete course (Admin only)
👤 Users
Method	Endpoint	Description
GET	/api/users/profile	Get logged-in user profile
🧪 How the System Works

Authentication Flow

User registers or logs in

Server validates credentials

JWT token is issued and required for protected routes

Authorization

Middleware checks JWT validity

Role-based middleware restricts admin-only actions

Data Management

Courses and users stored in MongoDB

Controllers handle business logic

Routes remain clean and minimal

🧠 Key Backend Concepts Demonstrated

✔ JWT authentication and middleware protection
✔ Role-based access control
✔ RESTful API design
✔ Modular backend architecture
✔ Secure password handling

⭐ Why This Project Matters

This LMS backend reflects real backend responsibilities, including:

Authentication and authorization logic

Role-based permissions

Clean separation of concerns

API design suitable for frontend consumption

It demonstrates readiness for junior backend / full-stack roles, not just tutorial-level practice.

📌 Possible Improvements

Add course enrollment logic

Add progress tracking

Implement refresh tokens

Add API documentation with Swagger

Add automated tests
