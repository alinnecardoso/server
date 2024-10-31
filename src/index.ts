import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import instrumentsRoute from './Routes/instruments'

const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Permitir CORS
app.use(bodyParser.json()); // Para parsear JSON

app.use(instrumentsRoute);

app.listen(3001, () => {
  console.log(`Server is running on port ${port}`);
})