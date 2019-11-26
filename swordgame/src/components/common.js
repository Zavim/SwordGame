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
  res.send({});
}

module.exports = ex;