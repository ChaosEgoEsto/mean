const express = require('express');
const app = express();

const mongoose = require('mongoose');
const configDev = require('./config/dev-db');
const path = require('path')

mongoose.Promise = global.Promise;
mongoose.connect( configDev.uri, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
  if (err) {
    console.log(`Unable to connect to DB: ${configDev.db}! Reason: `, err);
  } else {
    console.log(`Succesfully connected to DB: ${configDev.db}!`);
  };
});

const port = 8080;

app.use(express.static(__dirname + '/client/dist/client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/client/index.html'))
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
