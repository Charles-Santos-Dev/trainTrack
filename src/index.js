require('dotenv').config();

const express = require('express'),
      routes  = require('./routes'),
      app     = express()
      PORT    = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(PORT || 3333);