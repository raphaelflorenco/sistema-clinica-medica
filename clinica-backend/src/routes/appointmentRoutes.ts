import { Router } from 'express';
import { criarAgendamento, listarAgendamentos } from '../controllers/appointmentController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

// Middleware aplicado a todas as rotas abaixo
router.use(authMiddleware);

router.post('/', criarAgendamento);
router.get('/', listarAgendamentos);

export default router;