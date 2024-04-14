const express = require('express'),
      routes  = express.Router();

const LoginController = require('./controllers/LoginController');

routes.get('/', (req, res) => {
    return res.status(200).send('Hello World!');
});

routes.post('/login', LoginController.login);

module.exports = routes;