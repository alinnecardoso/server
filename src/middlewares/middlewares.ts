// src/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extende a interface Request para adicionar o campo 'user'
interface AuthRequest extends Request {
  user?: { id: string }; // Ajuste conforme o que seu token contém
}

const authMiddleware = (request: AuthRequest, response: Response, next: NextFunction) => {
  const token = request.headers['authorization']?.split(' ')[1]; // Extrai o token do cabeçalho

  if (!token) {
    response.status(403).json({ message: 'Token não fornecido' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      response.status(403).json({ message: 'Token inválido' });
      return;
    }

    request.user = { id: (decoded as { _id: string })._id }; // Adiciona o id do usuário no request

    next(); // Chama o próximo middleware ou rota
  });
};

export default authMiddleware;