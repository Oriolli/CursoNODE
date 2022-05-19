const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Seja bem vindo ao meu App!</h1>');
});

app.get('/sobre', function (req, res) {
  res.send('Minha página sobre');
});

app.get('/blog', function (req, res) {
  res.send('Bem-vindo ao meu blog');
});

app.get('/ola/:nome/:cargo/:cor', function (req, res) {
  res.send(
    '<h1>Ola ' +
      req.params.nome +
      '</h1>' +
      '<h2>Seu cargo é: ' +
      req.params.cargo +
      '</h2>' +
      '<h3>Sua cor favorita é: ' +
      req.params.cor +
      '</h3>',
  );
});

app.listen(8081, function () {
  console.log('Servidor rodando na url http://localhost:8081');
});
