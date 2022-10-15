const express = require('express');
const Acao_Controller = require('../controllers/Acao_Controller')
const Setor_controller = require('../controllers/Setor_Controller')
const User_Controller = require('../controllers/User_Controller')
const login = require("../middleware/login")

const routes = express('routes');

routes.get('/', Acao_Controller.index)
routes.post('/', Acao_Controller.create)
routes.get('/busca/:id', Acao_Controller.busca_id)
routes.delete('/deleta/:id', Acao_Controller.delete)
routes.put('/atualiza/:id', Acao_Controller.atualiza)

routes.get('/setor', Setor_controller.index)
routes.post('/setor', Setor_controller.create)
routes.get('/setor/busca/:id', Setor_controller.buscaid)
routes.delete('/setor/deleta/:id', Setor_controller.delete)
routes.put('/setor/atualiza/:id', Setor_controller.atualiza)

routes.get('/users', User_Controller.index);
routes.post('/login', User_Controller.login);
routes.post('/users', User_Controller.create);

module.exports = routes