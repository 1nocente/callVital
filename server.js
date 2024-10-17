const express = require('express');
const cors = require('cors'); // Importa o CORS

const app = express();
const PORT = 3001;

// Habilita o CORS para todas as rotas
app.use(cors());

app.use(express.json());

// Rota para gerar a URL de reunião Jitsi
app.get('/generate-meeting', (req, res) => {
  const roomName = `meeting-${Math.random().toString(36).substring(7)}`;
  const jitsiUrl = `https://meet.jit.si/${roomName}`;
  res.json({ url: jitsiUrl });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
