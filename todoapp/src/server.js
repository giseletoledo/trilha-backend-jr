const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');
const sequelize = require('./config/database');
const manipuladorErros = require('./middleware/manipuladorErros');

const app = express();
dotenv.config();
//console.log(dotenv)
const PORT = process.env.PORT || 3000;

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/todos', todosRouter);
app.use('/users', usersRouter);

// Middleware de tratamento de erros
app.use(manipuladorErros);

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync()
  .then(() => {
    console.log('Banco de dados SQLite conectado e sincronizado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar e sincronizar o banco de dados:', error);
  });

