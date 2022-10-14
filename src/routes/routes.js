const express = require('express');
const Acao_Controller = require('../controllers/Acao_Controller')
//const login = require("./middleware/login")

const routes = express('routes');

routes.get('/', Acao_Controller.index)
routes.post('/', Acao_Controller.create)
routes.get('/busca/:id', Acao_Controller.busca_id)
routes.delete('/deleta/:id', Acao_Controller.delete)
routes.put('/atualiza/:id', Acao_Controller.atualiza)

// routes.get('/users', UserController.index);
// routes.post('/login', UserController.login);
// routes.post('/users', UserController.create);

module.exports = routes