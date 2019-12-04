"use strict";

const samuraiFunctions = require('../components/samuraiFunctions.js');

let controller = {
  getAllSamurai: function(req, res) {
    samuraiFunctions.getAllSamurai(req, res);
  },
  getSamuraiById: function(req, res) {
    samuraiFunctions.getSamuraiById(req, res);
  },
};

module.exports = controller;
