require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./Lib/db');

const { config } = require('./config');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


connectDB();

app.listen(config.server.port, () => {
  console.log('The server is running on the port: ', config.server.port);
});