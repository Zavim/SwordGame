"use strict";

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   onConnect(db);
// });

function onConnect(db) {
  console.log("connected to the db successfully");
  let dbo = db.db("swordgame");
  let samurai = dbo.collection("samurai");
  // samurai.find({}).toArray(function(err, result) {
  //   if (err) throw err;
  //   onCall(result);
  //   db.close();
  // });
  samurai.findOne({"username": "2675259"}, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
}

function onCall(result) {
  let r = result.map(function (samurai) {
    delete samurai._id;
    return samurai;
  });
  console.log(r);
}

function removePrivateVariables(obj) {
  for (let key in obj) {
    if (key.startsWith("_")) {
      delete obj[key];
    }
  }
  return obj;
}

let json = {
  "_id":"5ddc7b8991116b3e4c7ee235",
  "username":"2743599",
  "face":"face1",
  "pattern":"pattern1",
  "hair":"hair1"
}
json = removePrivateVariables(json);
console.log(json);