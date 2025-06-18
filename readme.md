# Task 11 – User Authentication & Authorization (JWT + Node.js + Express)

This project implements secure **User Authentication and Authorization** using **Bearer Tokens (JWT)** in a Node.js application with Express.js and MongoDB (Mongoose), following the **MVC architecture**.

---

## 👩‍💻 Author

**Gayathri V**

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt (password hashing)
- dotenv (env config)
- Postman (API testing)

---

## 📁 Project Structure

```
├── models/             # User model (Mongoose schema)
├── controllers/        # Business logic (register, login, logout, me)
├── middleware/         # Token verification middleware
├── routes/             # API route definitions
├── utils/              # Config loader (dotenv)
├── app.js              # Express app setup
├── server.js           # MongoDB connection + app start
├── .env                # Environment variables
└── README.md           # Project documentation
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repo-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```env
MONGO_URI=mongodb://localhost:27017/auth_demo
JWT_SECRET=your_super_secret_jwt_key
PORT=3001
```

### 4. Start the Server

```bash
npm run dev
```

---

## 🚀 API Endpoints

### 📌 Base URL
```
http://localhost:3001/users
```

---

### 🔐 POST `/register` – Register User

- **Body:**
```json
{
  "username": "gaya",
  "email": "g2@mail.com",
  "password": "123456"
}
```

- **Response:**
```json
{
  "message": "User registered successfully"
}
```

---

### 🔐 POST `/login` – Login User

- **Body:**
```json
{
  "email": "g2@mail.com",
  "password": "123456"
}
```

- **Response:**
```json
{
  "message": "Login successful",
  "token": "<jwt_token>"
}
```

---

### 🔐 GET `/me` – Get Profile (Protected)

- **Header:**
```
Authorization: Bearer <jwt_token>
```

- **Response:**
```json
{
  "message": "User profile retrieved",
  "user": {
    "_id": "6852...",
    "username": "gaya",
    "email": "g2@mail.com"
  }
}
```

---

### 🔐 POST `/logout` – Logout User (Protected)

- **Header:**
```
Authorization: Bearer <jwt_token>
```

- **Response:**
```json
{
  "message": "User logged out successfully"
}
```

---

## 📦 Key Packages Used

| Package       | Purpose                        |
|---------------|--------------------------------|
| `express`     | Web framework                  |
| `mongoose`    | MongoDB ORM                    |
| `bcrypt`      | Password hashing               |
| `jsonwebtoken`| JWT token generation & verify  |
| `dotenv`      | Environment config             |
| `nodemon`     | Hot reload during development  |

---

## 🧪 Testing

Use **Postman** to test the API endpoints.

### 💡 Postman Headers for Protected Routes
```
Key: Authorization
Value: Bearer <your_token_here>
```

---

## 📌 License

This project is for educational/demo use only.

---