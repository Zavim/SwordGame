"use strict";

const mongodb = require('mongodb');

const globals = require('./globals.js');
const common = require('./common.js');

const ex = {
  createAccountRequest: createAccountRequest,
  checkLogin, checkLogin,
};

function checkLogin(req, res) {
  let args = common.checkNonNullURLParameters(req, ["username", "password"]);
  if (args.length == 0) {
    common.returnErrorJSON(res);
    return;
  }
  let username = args.username;
  let password = args.password;
  mongodb.MongoClient.connect(globals.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("swordgame");
    let users = dbo.collection("users");
    users.findOne({"username": username, "password": password}, function(err, result) {
      if (err) throw err;
      if (result == null) {
        res.status(200).json({"LoginStatus": "Fail"}).end();
        return;
      }
      return res.status(200).json({"LoginStatus": "Success"}).end();
    });
  });
}

function createAccountRequest(req, res) {
  let username = req.query.username;
  let password = req.query.password;
  for (let elem of [username, password]) {
    if (elem == null) {
      common.returnErrorJSON(res);
      return;
    }
  }
  console.log("Validated " + username + " and " + password);
  createAccount(username, password, res);
}

function createAccount(username, password, res) {
  mongodb.MongoClient.connect(globals.dbURL, function(err, db) {
    if (err) throw err;
    let dbo = db.db("swordgame");
    let users = dbo.collection("users");
    users.findOne({"username": username}, function(err, result) {
      if (err) throw err;
      if (result != null) {
        common.returnErrorJSON(res);
        return;
      }
      let newUser = {
        username: username,
        password: password,
      }
      mongodb.MongoClient.connect(globals.dbURL, function(err, db) {
        if (err) throw err;
        let dbo = db.db("swordgame");
        let users = dbo.collection("users");
        users.insertOne(newUser, function(err, dbRes) {
          if (err) throw err;
          db.close();
          console.log("A new user with username " + username + " has been added to the database");
          res.send(newUser);
        });
      });
    });
  });
}

module.exports = ex;
