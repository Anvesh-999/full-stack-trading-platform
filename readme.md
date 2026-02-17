# 🚀 Full Stack Trading Platform

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Auth-JWT-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-MongoDB-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Dashboard-MaterialUI-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Security-Protected%20Routes-red?style=for-the-badge" />
</p>

---

## 📈 Overview

A production-style **Full Stack Trading Platform** inspired by modern stock trading applications.

This project simulates a real-world trading environment with:

- 🔐 Secure JWT Authentication
- 📊 Protected Dashboard
- 💼 Portfolio Management
- 💰 Buy / Sell Stock Simulation
- 📉 Interactive Chart Visualization
- 🏗 MVC Backend Architecture
- 🍪 Cookie-based Session Handling

This system demonstrates real-world full-stack architecture with proper route protection and secure user data handling.

---

# 🏗 System Architecture

```
Frontend (Port 3000)
        │
        │  Axios + Cookies
        ▼
Backend (Node + Express)
        │
        │  JWT Middleware Verification
        ▼
MongoDB Database
        │
        ▼
Dashboard (Port 3001 - Protected)
```

---

# 🧠 Tech Stack

## 🔹 Backend

- Node.js
- Express 5
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt / bcryptjs
- cookie-parser
- cors
- dotenv
- nodemon

Architecture Pattern: **MVC (Model-View-Controller)**

### Backend Structure

```
backend/
 ├── Controllers/
 ├── Middlewares/
 ├── model/
 ├── Routes/
 ├── schemas/
 ├── util/
 ├── index.js
 └── .env
```

---

## 🔹 Frontend (Public App – Port 3000)

- React 19
- React Router DOM v7
- Axios
- React Cookies
- React Toastify

Handles:
- Login / Register
- Stock Listing
- Order Placement
- Token Handling

---

## 🔹 Dashboard (Private – Port 3001)

- React 18
- Material UI (MUI v5)
- Chart.js
- React ChartJS 2
- Axios
- React Router DOM v6

Used for:
- Portfolio Overview
- Performance Charts
- Protected User Data Display

---

# 🔐 Authentication & Security

This project uses **JWT-based authentication with middleware protection**.

## 🔑 Authentication Flow

1. User logs in.
2. Backend verifies credentials.
3. JWT token is generated using `TOKEN_KEY`.
4. Token is stored in HTTP cookies.
5. Protected routes use `userVerification` middleware.
6. Middleware verifies token:
   ```js
   jwt.verify(token, process.env.TOKEN_KEY)
   ```
7. If valid → Access granted.
8. If invalid/expired → 401 Unauthorized.

---

## 🛡 Middleware Protection

The `userVerification` middleware:

- Extracts token from cookies
- Verifies JWT signature
- Fetches user from MongoDB
- Attaches user to request
- Allows protected route access

If token is missing or invalid → request blocked.

---

# 🔒 Protected Dashboard Behavior

The Dashboard is **NOT directly accessible**.

- ❌ Direct URL access blocked
- 🔄 Unauthorized users redirected to login
- ✅ Only authenticated users can access portfolio data

This mimics real-world financial platforms where user data must remain secure.

---

# 💾 Environment Variables

Create `.env` inside backend:

```
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_secret_jwt_key
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```
git clone https://github.com/Anvesh-999/full-stack-trading-platform.git
cd full-stack-trading-platform
```

---

## 2️⃣ Backend Setup

```
cd backend
npm install
npm start
```

Runs using **nodemon**.

---

## 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

Runs on:
```
http://localhost:3000
```

---

## 4️⃣ Dashboard Setup

```
cd dashboard
npm install
npm start
```

Runs on:
```
http://localhost:3001
```

---

# 📊 Key Features

- 🔐 JWT Authentication
- 🍪 Cookie-based token storage
- 🛡 Protected API routes
- 📉 Buy / Sell simulation
- 💼 Portfolio management
- 📊 Chart visualization
- 🏗 MVC backend structure
- 🧠 Multi-client architecture
- ⚡ Axios API integration
- 🔔 Toast notifications

---

# 🎯 End-to-End User Flow

```
User opens Frontend
        ↓
Registers / Logs in
        ↓
JWT token generated
        ↓
Token stored in cookies
        ↓
User places trades
        ↓
Portfolio updates in MongoDB
        ↓
Dashboard fetches protected data
        ↓
Charts visualize performance
```

---

# 🧪 Security Implementation

- Password hashing with bcrypt
- JWT signature verification
- Protected middleware routes
- Environment-based secrets
- 401 handling for unauthorized access

---

# 💡 What This Project Demonstrates

- Full Stack Development
- Authentication & Authorization
- Secure Middleware Design
- Database Modeling
- Multi-App React Architecture
- Production-Level Structure
- Clean API Design
- Protected Route Handling

---

# 🚀 Future Improvements

- Real-time stock price API integration
- WebSocket live updates
- Refresh token implementation
- Role-based authorization
- Docker containerization
- CI/CD integration
- Cloud deployment (AWS / Render / Vercel)

---

# 👨‍💻 Author

Built as a full-stack trading simulation platform demonstrating secure, scalable and production-ready architecture.

---

<p align="center">
  ⭐ If you like this project, consider giving it a star!
</p>
