# EverNote ✨

A modern full-stack notes application built with the MERN stack, designed for creating, editing, searching, and managing personal notes with a clean and responsive interface.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)

## 🌟 About the Project

EverNote is a simple yet polished note-taking app that demonstrates a complete authentication-based web application workflow. It includes:

- User registration and login
- Secure JWT-based authentication
- Create, update, delete, and search notes
- Responsive UI with a modern look
- REST API backend with MongoDB storage

## 🚀 Features

- 📝 Create and manage notes easily
- 🔐 Secure login and registration system
- 🔍 Search notes instantly
- 🧠 Clean and user-friendly interface
- ⚡ Fast frontend with Vite
- 🛠 Backend powered by Express and MongoDB

## 🧰 Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- dotenv

## 📁 Project Structure

```bash
mern-notes-app-main/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── package.json   
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root with:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern-notes-app
JWT_SECRET=your_secret_key_here
```

### 4. Run the app

Start the backend:

```bash
cd backend
npm start
```

Start the frontend:

```bash
cd frontend
npm run dev
```

## 🌐 Deployment

This project can be deployed using:
- Vercel for the frontend
- Render for the backend
- MongoDB Atlas for the database

## 🤝 Contributing

Contributions are welcome! If you want to improve this project, feel free to fork the repository and submit a pull request.

## 📌 Developer Note

This project is a great example of a full-stack MERN application with authentication, CRUD operations, and modern UI design.
