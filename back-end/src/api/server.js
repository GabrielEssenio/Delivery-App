const port = process.env.PORT || 3001;
const cors = require('cors');
const app = require('./app');
const express = require('express');
const login  = require('../routers/Login');
const register = require('../routers/Register');
const error = require('../middleware/error');

app.use(express.json());
app.use(cors());

// LOGIN
app.use('/login', login);
app.use('/register', register);

app.use(error);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
