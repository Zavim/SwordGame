"use strict";

const mongodb = require('mongodb');

const globals = require('./globals.js');
const common = require('./common.js');

const ex = {
  getHairs: getHairs,
  getFaces: getFaces,
  getPatterns: getPatterns,
};

function getHairs(req, res) {
  getAsset(req, res, "hair");
}

function getFaces(req, res) {
  getAsset(req, res, "face");
}

function getPatterns(req, res) {
  getAsset(req, res, "pattern");
}

function getAsset(req, res, collectionName) {
  mongodb.MongoClient.connect(globals.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("swordgame");
    let collection = dbo.collection(collectionName);
    collection.find({}).toArray(function(err, result) {
      db.close();
      if (err) throw err;
      if (result == null) {
        common.returnErrorJSON(res);
        return;
      }
      let r = result.map(function (s) {
        return s.title;
      });
      res.send(r);
    });
  });
}

module.exports = ex;
