import { Response } from 'express';
import { CustomRequest } from '../middlewares/auth';
import Appointment from '../models/Appointment';
import axios from 'axios';

export const criarAgendamento = async (req: CustomRequest, res: Response): Promise<any> => {
  try {
    const { dataConsulta, horario, cep } = req.body;
    const pacienteId = req.usuario.id;

    // 1. Verificação de Horário Disponível (Regra de Negócio)
    const conflito = await Appointment.findOne({ dataConsulta, horario, status: 'agendado' });
    if (conflito) {
      return res.status(400).json({ erro: 'Este horario ja esta ocupado por outro paciente.' });
    }

    // 2. Integração com API de CEP (ViaCEP)
    let endereco = '';
    let cidade = '';
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.data.erro) {
        endereco = `${response.data.logradouro}, ${response.data.bairro} - ${response.data.localidade}/${response.data.uf}`;
        cidade = response.data.localidade;
      }
    } catch (e) {
      console.error("Erro ao buscar CEP");
    }

    // 3. Integracao com API de Clima (OpenWeatherMap)
    let alerta = 'Ceu limpo para o dia da consulta.';
    if (cidade) {
      try {
        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&appid=${process.env.WEATHER_API_KEY}&lang=pt_br`
        );
        const condicao = weatherRes.data.weather[0].main.toLowerCase();
        if (condicao.includes('rain') || condicao.includes('storm') || condicao.includes('drizzle')) {
          alerta = 'Atenção: Previsao de chuva. Nao esqueca o guarda-chuva!';
        }
      } catch (e) {
        console.error("Erro ao buscar clima");
      }
    }

    // 4. Salvar no Banco
    const novoAgendamento = new Appointment({
      pacienteId,
      dataConsulta,
      horario,
      cep,
      enderecoCompleto: endereco,
      alertaClima: alerta,
      status: 'agendado'
    });

    await novoAgendamento.save();
    res.status(201).json({ mensagem: 'Consulta agendada com sucesso!', agendamento: novoAgendamento });

  } catch (error) {
    console.error("DETALHE DO ERRO:", error);
    res.status(500).json({ erro: 'Erro ao processar agendamento.' });
  }
};

export const listarAgendamentos = async (req: CustomRequest, res: Response): Promise<any> => {
  try {
    const filtro = req.usuario.cargo === 'secretario' ? {} : { pacienteId: req.usuario.id };
    const consultas = await Appointment.find(filtro).populate('pacienteId', 'nome');
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar consultas.' });
  }
};