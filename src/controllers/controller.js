"use strict";

const samuraiFunctions = require('../components/samuraiFunctions.js');
const resourceFunctions = require('../components/resourceFunctions.js');

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
  getHairs: function(req, res) {
    resourceFunctions.getHairs(req, res);
  },
  getFaces: function(req, res) {
    resourceFunctions.getFaces(req, res);
  },
  getPatterns:function(req, res) {
    resourceFunctions.getPatterns(req, res);
  },
};

module.exports = controller;
