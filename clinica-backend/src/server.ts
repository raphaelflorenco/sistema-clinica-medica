import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import appointmentRoutes from './routes/appointmentRoutes';

// Carrega as variaveis secretas do arquivo .env
dotenv.config();

// Conecta com o banco de dados
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Libera o acesso para o Frontend (porta 5173)
app.use(cors());

// Permite que o servidor entenda JSON
app.use(express.json());

// Rotas do sistema
app.use('/api/auth', authRoutes);
app.use('/api/agendamentos', appointmentRoutes);

// Rota de teste para ver se a API esta viva
app.get('/', (req, res) => {
  res.send('API da Clinica Medica rodando perfeitamente!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});