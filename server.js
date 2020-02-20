const express = require('express');

const recipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(express.json(), helmet());
server.use('/api/schemes', recipeRouter);

module.exports = server;