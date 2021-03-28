const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const { TestConnection } = require('./database/test-connection');
const { AppConfig } = require('../config');
const { Router } = require('./router');

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/api', Router);

server.get('/', async (req, res) => {
  await TestConnection.test(async state => {
    var msg = `
      API Server Tasks Works <br/>
      Server Time__: ${new Date()}<br/>
      Server Port__: ${AppConfig.Port}<br/>
      Db Tasks_____: ${state}<br/>
    `;
    await res.send(msg);
  });
});

server.listen(AppConfig.Port, function() {
  console.log(`SERVER running on port: ${AppConfig.Port}`);
});
