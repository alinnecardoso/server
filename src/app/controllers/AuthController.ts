// AuthController.ts
import { Request, Response } from 'express';
import AuthRepository from '../respositories/AuthRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface User {
  id: string;
  email: string;
  senha: string;
}

class AuthController {
  generateToken(userId: string): string {
    if (!process.env.SECRET_KEY) {
      throw new Error("JWT private key is not defined.");
    }

    return jwt.sign({ _id: userId }, process.env.SECRET_KEY, { expiresIn: '7d' });
  }

  // Usando uma arrow function para garantir que `this` se refere à instância correta
  login = async (request: Request, response: Response) => {
    const { email, senha } = request.body;

    if (!email || !senha) {
      response.status(400).json({ message: "Email e senha são obrigatórios." });
      return;
    }

    try {
      const user: User | null = await AuthRepository.findByEmail(email);

      if (!user) {
        response.status(404).json({ message: "Usuário não encontrado." });
        return;
      }

      const isPasswordCorrect = await bcrypt.compare(senha, user.senha);

      if (!isPasswordCorrect) {
        response.status(401).json({ message: "Email ou senha incorretos." });
        return;
      }

      const token = this.generateToken(user.id);
      response.status(200).json({ token });
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      response.status(500).json({ message: "Erro ao realizar login." });
    }
  };
}

export default new AuthController();