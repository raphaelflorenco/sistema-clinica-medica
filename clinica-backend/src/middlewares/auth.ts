import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Interface para estender o Request do Express e incluir os dados do usuario
export interface CustomRequest extends Request {
  usuario?: any;
}

export const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction): any => {
  // 1. Pega o token que vem no cabecalho da requisicao
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ erro: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    // 2. Valida o token usando a nossa chave secreta do .env
    const verificado = jwt.verify(token, process.env.JWT_SECRET as string);
    req.usuario = verificado; // Salva os dados do usuario na requisicao para uso futuro
    
    next(); // Passaporte carimbado! Pode seguir para a rota.
  } catch (error) {
    res.status(400).json({ erro: 'Token invalido ou expirado.' });
  }
};