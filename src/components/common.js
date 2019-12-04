"use strict";

const ex = {
  removePrivateVariables: removePrivateVariables,
  returnErrorJSON: returnErrorJSON,
};

function removePrivateVariables(obj) {
  for (let key in obj) {
    if (key.startsWith("_")) {
      delete obj[key];
    }
  }
  return obj;
}

function returnErrorJSON(res) {
  res.status(400).json({}).end();
}

module.exports = ex;