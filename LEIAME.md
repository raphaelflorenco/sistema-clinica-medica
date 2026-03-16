================================================================================
      SISTEMA DE ATENDIMENTO INTELIGENTE PARA CLINICAS MEDICAS - AVA 2
================================================================================

Desenvolvido como Trabalho da Disciplina (TD) de Desenvolvimento Backend I.
Uma aplicacao web full-stack para agendamento de consultas com integracao de 
APIs externas e seguranca de dados.

+------------------------------------------------------------------------------+
| 1. ARQUITETURA E TECNOLOGIAS                                                 |
+------------------------------------------------------------------------------+

O sistema adota a separacao de responsabilidades entre Cliente (Frontend) e 
Servidor (Backend), comunicando-se via API REST.

[ BACKEND - Motor e Regras de Negocio ]
> Node.js + Express : Estruturacao do servidor e rotas da API.
> MongoDB           : Banco de dados NoSQL para salvar usuarios e agendamentos.
> JWT               : Autenticacao (JSON Web Token) para protecao de rotas.

[ FRONTEND - Interface do Usuario ]
> Vue.js            : Criacao da interface reativa (Single Page Application).
> Axios             : Cliente HTTP para consumir o Backend enviando o token.

[ INTEGRACOES - APIs Externas ]
> ViaCEP            : Busca automatica do endereco baseada no CEP do paciente.
> OpenWeatherMap    : Previsao do tempo e alertas climaticos para a consulta.

+------------------------------------------------------------------------------+
| 2. INSTRUCOES PARA EXECUCAO LOCAL                                            |
+------------------------------------------------------------------------------+
Requisitos: Node.js e MongoDB (rodando localmente na porta 27017) instalados.

---> PASSO A: INICIANDO O BACKEND (PORTA 3000)
  1. Abra o terminal e acesse a pasta do servidor:
     $ cd clinica-backend

  2. Instale as dependencias:
     $ npm install

  3. Crie um arquivo chamado ".env" e configure as variaveis:
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/clinica
     JWT_SECRET=suachavesecreta

  4. Inicie o servidor:
     $ npm run dev

---> PASSO B: INICIANDO O FRONTEND (PORTA 5173)
  1. Abra um NOVO terminal e acesse a pasta da interface:
     $ cd clinica-frontend

  2. Instale as dependencias:
     $ npm install

  3. Inicie a aplicacao web:
     $ npm run dev

+------------------------------------------------------------------------------+
| 3. FLUXO DE USO DO SISTEMA                                                   |
+------------------------------------------------------------------------------+

[1] LOGIN:
    Acesse localhost:5173 no navegador e realize o login com e-mail e senha.
    O sistema validara os dados no Backend e guardara o Token JWT.

[2] REDIRECIONAMENTO:
    Apos o login bem-sucedido, o Vue Router levara voce ao Painel principal.

[3] AGENDAMENTO INTELIGENTE:
    Preencha a Data, o Horario e o CEP. Ao submeter, o sistema consultara as 
    APIs ViaCEP e OpenWeatherMap automaticamente, salvando a consulta no banco 
    e retornando o endereco completo e a previsao do tempo na tela.

================================================================================