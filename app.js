const express = require('express');
const app = express();

const routeFilms = require('./routes/films');

app.use('/films', routeFilms);

module.exports = app;