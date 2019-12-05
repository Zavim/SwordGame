"use strict";

const path = require('path');

const ex = {
  visitUserPage: visitUserPage,
};

function visitUserPage(req, res) {
  res.sendFile(path.resolve('public/user.html'));
}

module.exports = ex;
