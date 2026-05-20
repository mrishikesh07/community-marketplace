# Community Marketplace

A full-stack service marketplace web application where users can discover, search, and book local services while providers can manage their offerings through a dedicated dashboard.

---

## 🚀 Features

### 👤 Authentication & Authorization

* User and Provider roles
* JWT authentication
* Protected routes
* Secure password hashing using bcrypt

### 🛍 Marketplace Features

* Browse available services
* Search services by title, description, and category
* Ratings and reviews system
* Responsive and modern UI
* Separate services page

### 📅 Booking System

* Users can book services
* Booking management
* Role-based access control

### 🧑‍💼 Provider Dashboard

* Add new services
* Edit services
* Delete services
* Manage listed services

### 🧪 Testing

* Backend API testing using Jest + Supertest
* Frontend component testing using Vitest + React Testing Library

---

## 🛠 Tech Stack

### Frontend

* React
* React Router DOM
* Tailwind CSS
* Axios
* Vitest
* React Testing Library

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Jest
* Supertest

---

## 📂 Project Structure

```bash
community-marketplace/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/community-marketplace.git
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend server:

```bash
npm run dev
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🧪 Run Tests

### Backend Tests

```bash
cd backend
npm test
```

### Frontend Tests

```bash
cd frontend
npm test
```

---

## 📸 Screenshots

Add screenshots here:

* Home page
* Services page
* Provider dashboard
* Booking page

---

## 🌐 Future Improvements

* Online payments integration
* Real-time notifications
* Service image uploads
* Advanced filters & sorting
* Admin dashboard
* Dark mode support

---

## 👨‍💻 Author

Built by Rishikesh

GitHub: [https://github.com/mrishikesh07]
