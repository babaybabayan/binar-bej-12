import express, { json } from "express";
const app = express();
const PORT = 3000;

// Import layers
import UserRepository from "./src/repository/userRepository.js";
import ProductRepository from "./src/repository/productRepository.js";
import UserService from "./src/service/userService.js";
import ProductService from "./src/service/productService.js";
import UserHandler from "./src/handler/userHandler.js";
import ProductHandler from "./src/handler/productHandler.js";

app.use(json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);
const productRepository = new ProductRepository();
const productService = new ProductService(productRepository, userRepository);
const productHandler = new ProductHandler(productService);

app.get("/users", userHandler.getAll);
app.post("/user", userHandler.getByEmail);

app.post("/login", userHandler.login);
app.post("/register", userHandler.register);

app.post("/product", productHandler.create);
app.get("/products", productHandler.getAll);

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});

// Arsitektur Backend NodeJS
// 3 layers:
// 1. Handler
// 2. Service
// 3. Repository
