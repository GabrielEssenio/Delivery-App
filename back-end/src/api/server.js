const port = process.env.PORT || 3001;
const cors = require('cors');
const app = require('./app');
const express = require('express');
const login  = require('../routers/Login');
const register = require('../routers/Register');
const path = require('path');
const customer = require('../routers/Customer');
const seller = require('../routers/Seller');
const admin = require('../routers/Admin');
// const http = require('http');
const httpServer = http.createServer(app);
const error = require('../middleware/error');
const http = require("http").createServer(app);

app.use(express.json());
app.use(cors());

const io = require("socket.io")(http,{
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET', 'PUT'],
  }
});

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public','images')));

require('../sockets/ping')(io);
// LOGIN
app.use('/login', login);
//REGISTER
app.use('/register', register);
//PRODUCT

app.use('/customer', customer)

// SELLER
app.use('/seller', seller);

app.use('/admin', admin)

app.use(error);

httpServer.listen(port);
console.log(`Api rodando na porta ${port}`);
