<template>
  <div class="agendamento-container">
    <h2>Marcar Nova Consulta</h2>
    
    <form @submit.prevent="marcarConsulta" class="form-agendamento">
      <div class="input-group">
        <label>Data da Consulta</label>
        <input type="date" v-model="dataConsulta" required />
      </div>
      
      <div class="input-group">
        <label>Horário</label>
        <input type="time" v-model="horario" required />
      </div>

      <div class="input-group">
        <label>CEP (Para buscar o endereço)</label>
        <input type="text" v-model="cep" placeholder="Ex: 20031144" required maxlength="8" />
      </div>

      <button type="submit">Agendar Consulta</button>
    </form>

    <div v-if="mensagem" class="resultado">
      <h3>{{ mensagem }}</h3>
      <p v-if="enderecoLocalizado"><strong>Endereço:</strong> {{ enderecoLocalizado }}</p>
      <p v-if="alertaClima" class="alerta-clima"><strong>Previsão:</strong> {{ alertaClima }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from '../services/api';

const dataConsulta = ref('');
const horario = ref('');
const cep = ref('');
const mensagem = ref('');
const enderecoLocalizado = ref('');
const alertaClima = ref('');

const marcarConsulta = async () => {
  try {
    mensagem.value = 'Processando...';
    
    // Mandando os dados para o Backend
    const response = await api.post('/agendamentos', {
      dataConsulta: dataConsulta.value,
      horario: horario.value,
      cep: cep.value
    });

    mensagem.value = response.data.mensagem;
    // Pegando os dados que vieram do ViaCEP e OpenWeatherMap
    enderecoLocalizado.value = response.data.agendamento.enderecoCompleto;
    alertaClima.value = response.data.agendamento.alertaClima;
    
  } catch (error: any) {
    mensagem.value = error.response?.data?.erro || 'Erro ao agendar consulta.';
    enderecoLocalizado.value = '';
    alertaClima.value = '';
  }
};
</script>

<style scoped>
.agendamento-container { max-width: 500px; margin: 50px auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); font-family: Arial, sans-serif; }
.form-agendamento { display: flex; flex-direction: column; gap: 15px; }
.input-group label { font-weight: bold; margin-bottom: 5px; display: block; }
input { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
button { padding: 12px; background-color: #2196F3; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }
button:hover { background-color: #0b7dda; }
.resultado { margin-top: 20px; padding: 15px; background-color: #e7f3fe; border-left: 6px solid #2196F3; }
.alerta-clima { color: #d35400; font-weight: bold; }
</style>