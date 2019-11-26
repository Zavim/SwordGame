"use strict";

const controller = require('../controllers/controller.js');

module.exports = function (app) {
  app.get('/', controller.homePage);
  app.get('/api/get-samurai', controller.getSamuraiById);
  app.get('/api/all-samurai', controller.getAllSamurai);
};