"use strict";

const express = require('express');
const app = express();
var server = require('http').createServer(app);

const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const mongoose = require('mongoose');

app.use("/libraries", express.static('libraries'));
app.use("/", express.static('public'));
app.use("/tst", express.static('tst'));
app.use("/assets", express.static('assets'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application / vnd.api + json'
}));
app.use(methodOverride());
app.use(cors());
const appRoutes = require('./routes/routes.js')(app)
server.listen(5000, () => {
  console.log('Server listening at port 5000');
})