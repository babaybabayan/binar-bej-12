import express, { json } from 'express';
const app = express();
const PORT = 3000;

// Import layers
import UserRepository from './src/repository/userRepository.js';
import UserService from './src/service/userService.js';
import UserHandler from './src/handler/userHandler.js';

app.use(json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

app.get('/users', userHandler.getAll);
app.post('/user', userHandler.getByEmail);

app.post('/login', userHandler.login);
app.post('/register', userHandler.register);

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});

// Arsitektur Backend NodeJS
// 3 layers:
// 1. Handler
// 2. Service
// 3. Repository
