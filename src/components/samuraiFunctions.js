"use strict";

const mongodb = require('mongodb');

const globals = require('./globals.js');
const common = require('./common.js');

const ex = {
  getAllSamurai: getAllSamurai,
  getSamuraiById: getSamuraiById,
  createSamurai: createSamurai,
  updateSamurai: updateSamurai,
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

function createSamurai(req, res) {
  const username = req.query.username;
  const hair = req.query.hair;
  const face = req.query.face;
  const pattern = req.query.pattern;
  for (let elem of [username, hair, face, pattern]) {
    if (elem == null) {
      common.returnErrorJSON(res);
      return;
    }
  }
  let newSamurai = {
    username: username,
    face: face,
    hair: hair,
    pattern: pattern,
  };
  mongodb.MongoClient.connect(globals.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("swordgame");
    let samurai = dbo.collection("samurai");
    samurai.insertOne(newSamurai, function(err, dbRes) {
      if (err) throw err;
      db.close();
      console.log("A new samurai with username " + username + " has been added to the database");
      res.send(newSamurai);
    });
  });
}

function updateSamurai(req, res) {
  const username = req.query.username;
  const hair = req.query.hair;
  const face = req.query.face;
  const pattern = req.query.pattern;
  for (let elem of [username, hair, face, pattern]) {
    if (elem == null) {
      common.returnErrorJSON(res);
      return;
    }
  }
  let newSamurai = {
    username: username,
    face: face,
    hair: hair,
    pattern: pattern,
  };
  mongodb.MongoClient.connect(globals.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("swordgame");
    let samurai = dbo.collection("samurai");
    samurai.update(
      {username: username},
      {$set: {
        face: face,
        hair: hair,
        pattern: pattern
      }}
    );
    db.close();
    console.log("A new samurai with username " + username + " has been updated in the database");
    res.send(newSamurai);
  });
}

module.exports = ex;
