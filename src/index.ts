import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import instrumentsRoute from './Routes/instruments';

// Configurar variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api', instrumentsRoute);

// Middleware de tratamento de erros
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});