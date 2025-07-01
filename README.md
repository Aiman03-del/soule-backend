<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Soule Product Management API (NestJS)

> This README is written in **English**.

## Server URL

Live Server:  
https://soule-backend-h8dn.onrender.com/

---

## Example Login

Use the following credentials to log in (for demo/testing):

- **Email:** `admin@example.com`
- **Password:** `123456`

---

## What does this project do?

This is a RESTful API built with NestJS for product management (CRUD) with JWT authentication.

### Main Features

- **Authentication:**  
  - Login and protected routes using JWT tokens.
  - Get a token via `/auth/login` by providing email and password.
- **Product Management:**  
  - Create, read, update, and delete products (CRUD).
  - Creating, updating, and deleting products require a valid JWT token.
  - Viewing all products or a single product is public.
- **Validation:**  
  - Input validation using DTOs and ValidationPipe.
- **Database:**  
  - Data is stored in a MySQL database using TypeORM.
- **Environment Config:**  
  - Configuration (DB, JWT_SECRET, etc.) is loaded from a `.env` file.
- **CORS:**  
  - CORS is enabled for frontend apps and other origins to access the API.

---

## API Routes (Summary)

- `POST /auth/login`  
  - Login and receive a JWT token.
- `GET /products`  
  - View all products (public).
- `GET /products/:id`  
  - View a single product (public).
- `POST /products`  
  - Create a new product (requires JWT token).
- `PUT /products/:id`  
  - Update a product (requires JWT token).
- `DELETE /products/:id`  
  - Delete a product (requires JWT token).

---

## Configuration

Add the following variables to your `.env` file:

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_pass
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
```

---

## How to Run

```bash
npm install
npm run start:dev
```

---

## Technologies Used

- NestJS (TypeScript)
- TypeORM (MySQL)
- JWT Authentication
- class-validator (DTO validation)

---

## Server

[https://soule-backend-h8dn.onrender.com/](https://soule-backend-h8dn.onrender.com/)

---

## Contact

For any questions, open an Issue or contact directly.