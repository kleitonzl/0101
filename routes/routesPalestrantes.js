import express from 'express';
import db from '../config/db.js';

const router = express.Router();

router.post('/palestrantes', (req, res) => {
  const { nome, expertise } = req.body;
  const query = 'INSERT INTO palestrantes (nome, expertise) VALUES (?, ?)';

  db.query(query, [nome, expertise], (err, result) => {
    if (err) throw err;
    res.send('Palestrante adicionado com sucesso!');
  });
});

router.get('/palestrantes', (req, res) => {
  const query = 'SELECT * FROM palestrantes';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

export default router;
