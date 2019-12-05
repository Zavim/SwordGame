"use strict";

const controller = require('../controllers/controller.js');

module.exports = function (app) {
  app.get(  '/api/get-samurai',       controller.getSamuraiById);
  app.get(  '/api/all-samurai',       controller.getAllSamurai);
  app.post( '/api/create-samurai',    controller.createSamurai);
  app.put(  '/api/update-samurai',    controller.updateSamurai);
  app.get(  '/api/get-hairs',         controller.getHairs);
  app.get(  '/api/get-faces',         controller.getFaces);
  app.get(  '/api/get-patterns',      controller.getPatterns);
  app.get(  '/api/check-account',     controller.checkLogin);
  app.post( '/api/create-account',    controller.createAccountRequest);
  app.get(  '/user/[a-zA-Z0-9]+/?',   controller.visitUserPage);
};
