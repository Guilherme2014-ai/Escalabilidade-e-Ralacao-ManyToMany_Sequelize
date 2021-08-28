const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 80;
// Dot Env

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, err => err ? console.error(err) : console.log(`Running At Port: ${PORT}`) );