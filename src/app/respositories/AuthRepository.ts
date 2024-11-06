import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// Interface para tipar o retorno dos dados do usuário
interface User {
  id: string;
  email: string;
  senha: string;
}

class AuthRepository {
  // Buscar usuário por email
  async findByEmail(email: string) {
    return prisma.usuarios.findUnique({
      where: { email },
    });
  }
}

export default new AuthRepository();
