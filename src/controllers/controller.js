"use strict";

const samuraiFunctions = require('../components/samuraiFunctions.js');

let controller = {
  getAllSamurai: function(req, res) {
    samuraiFunctions.getAllSamurai(req, res);
  },
  getSamuraiById: function(req, res) {
    samuraiFunctions.getSamuraiById(req, res);
  },
  createSamurai: function(req, res) {
    samuraiFunctions.createSamurai(req, res);
  },
  updateSamurai: function(req, res) {
    samuraiFunctions.updateSamurai(req, res);
  },
};

module.exports = controller;
