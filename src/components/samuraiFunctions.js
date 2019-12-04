"use strict";

const mongodb = require('mongodb');

const globals = require('./globals.js');
const common = require('./common.js');

const ex = {
  getAllSamurai: getAllSamurai,
  getSamuraiById: getSamuraiById,
};

function getSamuraiById(req, res) {
  const id = req.query.id;
  if (id == null) {
    common.returnErrorJSON(res);
    return;
  }
  mongodb.MongoClient.connect(globals.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("swordgame");
    let samurai = dbo.collection("samurai");
    samurai.findOne({'username': id}, function(err, result) {
      db.close();
      if (err) throw err;
      if (result == null) {
        common.returnErrorJSON(res);
        return;
      }
      result = common.removePrivateVariables(result);
      res.send(result);
    });
  });
}

function getAllSamurai(req, res) {
  mongodb.MongoClient.connect(globals.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("swordgame");
    let samurai = dbo.collection("samurai");
    samurai.find({}).toArray(function(err, result) {
      db.close();
      if (err) throw err;
      let r = result.map(function (s) {
        s = common.removePrivateVariables(s);
        return s;
      });
      res.send(r);
    });
  })
}

// TODO: getAssetTypes()

module.exports = ex;
