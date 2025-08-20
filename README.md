🎓 Learning Management System (LMS) – Backend

A Node.js + Express.js backend for an online Learning Management System.
It supports students, instructors, and admins, with features like authentication, course management, enrollments, quizzes, assignments, and grading.

🚀 Features

User Authentication (JWT-based login & signup)

Role-Based Access Control (Student, Instructor, Admin)

Course Management

Instructors can create courses

Admin approves/rejects courses

Enrollment System

Students can enroll in approved courses

Assignments & Quizzes

Students submit assignments

Attempt quizzes (only once per quiz)

Auto-scoring for quizzes

Grading

Instructors review & grade assignments

Quiz scores stored automatically

Admin Panel (API endpoints)

Approve/reject courses

Manage users

Security

Password hashing with bcrypt

JWT authentication middleware

Rate limiting, Helmet, CORS

Input validation with express-validator

🏗️ Tech Stack

Backend Framework: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT + bcrypt

Validation: express-validator

Security: helmet, cors, express-rate-limit

📂 Project Structure
LMS-Backend/
│── server.js             # App entry point
│── config/db.js          # MongoDB connection
│── controllers/          # Route handlers
│── middlewares/          # Auth & error middleware
│── models/               # Mongoose models
│── routes/               # API routes
│── utils/                # Helper functions
│── package.json          # Dependencies

⚙️ Setup & Installation

Clone repo

git clone https://github.com/your-username/lms-backend.git
cd lms-backend


Install dependencies

npm install


Setup environment variables
Create .env file:

PORT=5080
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret


Run server

npm run dev


Server runs at: http://localhost:5000

📌 API Endpoints
🔑 Auth

POST /api/auth/register – Register user

POST /api/auth/login – Login user

📚 Courses

POST /api/courses – Create course (Instructor only)

GET /api/courses – List all approved courses

PUT /api/admin/courses/:id/approve – Approve course (Admin)

🎓 Enrollment

POST /api/enrollments – Enroll in course (Student)

📝 Assignments

POST /api/assignments/:id/submit – Submit assignment

PUT /api/assignments/:id/grade – Grade assignment (Instructor)

❓ Quizzes

POST /api/quiz/:id/attempt – Attempt quiz (once per student)

✅ Future Improvements

Add instructor dashboards (API endpoints for analytics)

Add notification system (email or in-app)

Add file upload for assignments (PDF/doc)

Add course progress tracking

👨‍💻 Author
Abejoye Timothy
