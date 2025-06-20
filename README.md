# 📦 Week 2 Express.js RESTful API Assignment

This project is a RESTful API for managing a simple **product inventory**, built using **Express.js**. It demonstrates full CRUD functionality, routing, middleware, authentication, validation, error handling, and advanced features like filtering and pagination (optional).

---

## 🚀 Features

- ✅ Express.js server setup
- ✅ RESTful API with proper routing
- ✅ In-memory product storage using `uuid`
- ✅ Custom middleware:
  - Logger middleware
  - Authentication middleware
  - Validation middleware
- ✅ Error handling with custom error messages
- 🔐 Protected POST, PUT, DELETE routes
- ✅ Modular code structure with `controllers`, `routes`, and `middleware`
- 🛠️ Easy to extend and deploy

---

## 🧪 API Endpoints

| Method | Endpoint              | Description                 | Auth Required |
|--------|------------------------|-----------------------------|----------------|
| GET    | `/api/products`        | Get all products            | ❌             |
| GET    | `/api/products/:id`    | Get product by ID           | ❌             |
| POST   | `/api/products`        | Create a new product        | ✅             |
| PUT    | `/api/products/:id`    | Update product by ID        | ✅             |
| DELETE | `/api/products/:id`    | Delete product by ID        | ✅             |

> 🔐 Use this header for protected routes:
📚 License
This project is submitted for learning purposes under the PLP Kenya Express.js curriculum. All rights reserved © mahad Ali Gabow 2025.

💡 Author
GitHub: @dualeali

Project: Week 2 Express.js API – PLP Kenya
