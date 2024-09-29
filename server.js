import express from 'express';
import palestranteRoutes from './routes/routesPalestrantes.js';

const app = express();

app.use(express.json());

app.use('/eventos', palestranteRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
