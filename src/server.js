const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { TestConnection } = require('./database/test-connection');
const { AppConfig } = require('../config');
const { AllowRouter, ProtectedRouter } = require('./router');

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use('/oapi', AllowRouter)
    .use('/api', ProtectedRouter);

app.get('/', async (req, res) => {
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

app.listen(AppConfig.Port, function() {
  console.log(`SERVER running on port: ${AppConfig.Port}`);
});
