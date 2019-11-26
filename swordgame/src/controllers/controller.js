"use strict";

const samuraiFunctions = require('../components/samuraiFunctions.js');

let controller = {
  getAllSamurai: function(req, res) {
    samuraiFunctions.getAllSamurai(req, res);
  },
  getSamuraiById: function(req, res) {
    samuraiFunctions.getSamuraiById(req, res);
  },
  homePage: function (req, res) {
    res.end("<html>View <a href=\"/api/get-samurai?id=2743599\">Alex</a>, or <a href=\"/api/get-samurai?id=2675259\">Zavier</a>, or <a href=\"/api/all-samurai\">all samurai</a>.</html>");
  },
};

module.exports = controller;