# Sistema de Quiz de Programação

# Documentação da Aplicação de Quiz

## Introdução
Este documento descreve os passos para configurar e executar a aplicação de quiz desenvolvida com React (frontend), Node.js (backend) e MongoDB (banco de dados). Também há um resumo dos principais componentes do código.

## Guia de Configuração e Execução

### 1. Requisitos Necessários
- Node.js (v14 ou superior)
- MongoDB
- Gerenciador de pacotes (npm ou yarn)

### 2. Clonar o Repositório
Execute no terminal:
```bash
git clone <url-do-repositorio>
cd <nome-da-pasta>
```

### 3. Backend (Node.js)
1. Acesse a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
   
3. Inicie o servidor:
   ```bash
   npm start
   ```
   O backend rodará em `http://localhost:5000`.

### 4. Frontend (React)
1. Acesse a pasta do frontend:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
   O frontend rodará em `http://localhost:3000`.

### 5. Banco de Dados (MongoDB)
O banco de dados foi feito na nuvem mas para teste local, foi criado um arquivo chamado data.js (backend/database/data.js) que contém as perguntas criadas e a forma que foram inseridas no mongodb. Após a conexão (conn.js) as perguntas do quiz são retiradas diretamente do bando de dados. 

Antes de começar, certifique-se de que o MongoDB está ativo. Use a rota abaixo para adicionar perguntas iniciais:
```bash
POST http://localhost:5000/api/questions
```
---

## Conclusão
A aplicação de quiz utiliza uma arquitetura robusta e modular para entregar uma experiência fluida ao usuário. Com essa documentação, você pode configurá-la, executá-la e adaptá-la facilmente conforme suas necessidades.
