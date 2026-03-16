<template>
  <div class="login-container">
    <h2>Login da Clinica</h2>
    
    <form @submit.prevent="fazerLogin">
      <div class="input-group">
        <label>E-mail</label>
        <input type="email" v-model="email" required placeholder="Digite seu e-mail" />
      </div>
      
      <div class="input-group">
        <label>Senha</label>
        <input type="password" v-model="senha" required placeholder="Digite sua senha" />
      </div>

      <button type="submit">Entrar</button>
    </form>

    <p v-if="mensagemErro" class="erro">{{ mensagemErro }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';

const email = ref('');
const senha = ref('');
const mensagemErro = ref('');
const router = useRouter();

const fazerLogin = async () => {
  try {
    mensagemErro.value = '';
    // Chama o backend
    const response = await api.post('/auth/login', {
      email: email.value,
      senha: senha.value
    });
    
    // Salva o token no navegador
    localStorage.setItem('token', response.data.token);
    
    // Manda o usuario para a tela principal
    alert('Login com sucesso!');
    router.push('/agendamentos'); //Mudando de tela sozinho
  } catch (error: any) {
    mensagemErro.value = error.response?.data?.erro || 'Erro ao conectar com o servidor.';
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  font-family: Arial, sans-serif;
}
.input-group {
  margin-bottom: 15px;
  text-align: left;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
.erro {
  color: red;
  margin-top: 10px;
}
</style>