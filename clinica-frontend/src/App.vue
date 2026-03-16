<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
/* Estilos Globais para o Site Inteiro */
body {
  margin: 0;
  padding: 0;
  background-color: #f4f7f6;
  /* Escolhendo fontes mais legíveis e modernas */
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  
  /* AUMENTANDO O TAMANHO E O CONTRASTE */
  font-size: 18px; /* Aumenta o tamanho padrao de todos os textos */
  color: #1a1a1a; /* Um preto bem escuro para dar alto contraste */
  line-height: 1.6; /* Aumenta o espacamento entre as linhas para nao ficar embolado */
}

/* Deixando os titulos mais destacados */
h1, h2, h3 {
  color: #000000;
  font-weight: 800; /* Deixa o negrito bem forte */
}

/* Aumentando as letras dentro das caixas de texto e botoes */
input, button {
  font-size: 17px; /* Letras maiores na hora de digitar */
  font-family: inherit; /* Puxa a mesma fonte bonita do body */
  color: #333333;
}

/* Deixando os "labels" (os textinhos em cima das caixas) mais fortes */
label {
  font-weight: bold;
  font-size: 16px;
  color: #2c3e50;
}
</style>