# Sistema de Atendimento Inteligente para Clínicas Médicas

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Vue.js](https://img.shields.io/badge/Vue.js-Frontend-brightgreen)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![Axios](https://img.shields.io/badge/API-Axios-purple)
![License](https://img.shields.io/badge/License-Academic-lightgrey)

Este projeto consiste em uma aplicação **Full-Stack** desenvolvida para a **Avaliação 2 (AVA 2)** da disciplina de **Desenvolvimento Backend I**.

O sistema informatiza o **agendamento de consultas médicas**, integrando autenticação segura, persistência de dados e consumo de APIs externas para otimizar o fluxo de atendimento em clínicas médicas.

---

# Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Arquitetura](#️-arquitetura)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Integração com APIs](#-integração-com-apis)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#️-funcionalidades)
- [Referências Acadêmicas](#-referências-acadêmicas)

---

# 📖 Sobre o Projeto

O sistema foi desenvolvido para **digitalizar o processo de agendamento médico**, permitindo:

- Cadastro e autenticação de usuários
- Agendamento de consultas
- Consulta automática de endereço via CEP
- Verificação de previsão climática no dia da consulta
- Painel administrativo para gerenciamento dos atendimentos

A aplicação segue o modelo **Full-Stack**, separando claramente **Frontend** e **Backend**.

---

# Arquitetura

A arquitetura do sistema foi planejada para garantir **modularidade, segurança e escalabilidade**.

## Backend

Implementado com **Node.js** e **Express**, seguindo o padrão **MVC**.

Responsabilidades principais:

- Gerenciamento de usuários
- Autenticação via JWT
- Controle de agendamentos
- Integração com APIs externas
- Comunicação com o banco de dados

## Frontend

Desenvolvido em **Vue.js**, responsável pela interface do usuário e consumo da API.

Principais características:

- Interface reativa
- Formulários de login e cadastro
- Tela de agendamento
- Painel administrativo de consultas

---

# Tecnologias Utilizadas

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- dotenv

## Frontend

- Vue.js
- Axios
- Vite

## APIs externas

- ViaCEP
- OpenWeatherMap

---

# Integração com APIs

O sistema utiliza APIs externas para enriquecer a experiência do usuário.

### ViaCEP

Permite consultar automaticamente o endereço a partir do CEP informado pelo paciente.

Documentação:
https://viacep.com.br/

### OpenWeatherMap

Utilizado para verificar a **previsão do tempo** no dia da consulta, alertando o paciente sobre possibilidade de chuva.

Documentação:
https://openweathermap.org/api

---

# Instalação e Execução

## Pré-requisitos

Antes de iniciar, é necessário possuir instalado:

- Node.js
- npm
- MongoDB

---

# Configuração do Backend

Entre na pasta do backend:

```bash
cd clinica-backend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/clinica
JWT_SECRET=sua_chave_secreta
```

Inicie o servidor:

```bash
npm run dev
```

---

# Configuração do Frontend

Entre na pasta do frontend:

```bash
cd clinica-frontend
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

# Estrutura do Projeto

```
clinica-agendamento/
│
├── clinica-backend/
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   └── server.js
│
├── clinica-frontend/
│   ├── src
│   │   ├── components
│   │   ├── views
│   │   ├── services
│   │   └── App.vue
│   └── index.html
│
└── LEIAME.md
```

---

# Funcionalidades

✔ Cadastro de usuários  
✔ Login com autenticação JWT  
✔ Agendamento de consultas  
✔ Consulta automática de endereço via CEP  
✔ Verificação de previsão climática  
✔ Painel administrativo de agendamentos  
✔ Interface responsiva

---

# Referências Acadêmicas

ALVES, W. P. **Projetos de sistemas web: conceitos, estruturas, criação de banco de dados e ferramentas de desenvolvimento.** São Paulo: Saraiva, 2015.

FREITAS, P. H. C.; BIRNFELD, K.; SARAIVA, M. O. et al. **Programação back end III.** Porto Alegre: Grupo A, 2021.

OLIVEIRA, C. L. V.; ZANETTI, H. A. P. **Javascript descomplicado: programação para web, IoT e dispositivos móveis.** São Paulo: Saraiva, 2020.

---

# Autor

Raphael Florenço dos Santos  
Projeto desenvolvido para fins acadêmicos.
