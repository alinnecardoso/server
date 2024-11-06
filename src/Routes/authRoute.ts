import { Router } from 'express';
import AuthController from '../app/controllers/AuthController';

const authRoute = Router();

// Rota de login
authRoute.post('/login', AuthController.login);

export default authRoute;
