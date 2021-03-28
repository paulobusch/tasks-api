const { AppConfig } = require('../config');

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(AppConfig.Port, function() {
  console.log(`SERVER running on port: ${AppConfig.Port}`);
});
