const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const authRouter = require('../auth/router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/auth', authRouter);

server.get('/', (req, res) => {
  res.send(`API running`);
});


module.exports = server;