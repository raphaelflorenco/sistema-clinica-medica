import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import jwt from 'jsonwebtoken';

// ==========================================
// FUNCAO 1: REGISTRAR USUARIO
// ==========================================
export const registrarUsuario = async (req: Request, res: Response): Promise<any> => {
  try {
    const { nome, email, senha, cargo } = req.body;

    // Verifica se o e-mail ja existe
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ erro: 'Este e-mail já está cadastrado.' });
    }

    // Criptografa a senha
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    // Salva no banco de dados
    const novoUsuario = new User({ nome, email, senhaHash, cargo: cargo || 'paciente' });
    await novoUsuario.save();

    res.status(201).json({ mensagem: 'Usuario cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro interno ao cadastrar.' });
  }
};

// ==========================================
// FUNCAO 2: FAZER LOGIN E GERAR TOKEN JWT
// ==========================================
export const loginUsuario = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, senha } = req.body;

    // 1. Verifica se o usuario existe buscando pelo e-mail
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ erro: 'E-mail ou senha incorretos.' });
    }

    // 2. Compara a senha em texto que chegou com o hash do banco de dados
    const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);
    if (!senhaValida) {
      return res.status(400).json({ erro: 'E-mail ou senha incorretos.' });
    }

    // 3. Gera o Token JWT (O nosso "cracha" digital)
    const token = jwt.sign(
      { id: usuario._id, cargo: usuario.cargo }, // Payload
      process.env.JWT_SECRET as string,          // Assinatura secreta
      { expiresIn: '1d' }                        // Validade
    );

    // 4. Devolve o token e os dados basicos para o frontend
    res.status(200).json({
      mensagem: 'Login realizado com sucesso!',
      token,
      usuario: {
        id: usuario._id,
        nome: usuario.nome,
        cargo: usuario.cargo
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno ao tentar fazer login.' });
  }
};