"use strict";

const controller = require('../controllers/controller.js');

module.exports = function (app) {
  app.get('/api/get-samurai',       controller.getSamuraiById);
  app.get('/api/all-samurai',       controller.getAllSamurai);
  app.post('/api/create-samurai',   controller.createSamurai);
  app.put('/api/update-samurai',    controller.updateSamurai);
};
