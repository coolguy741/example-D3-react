var cuid = require('cuid');

var X_MIN = 1;
var X_MAX = 100;
var Y_MIN = 10;
var Y_MAX = 90;
var Z_MIN = 1;
var Z_MAX = 10;

var ns = {};

ns.generate = function(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
   res.push(this._generateDatum());
  }
  return res;
};

ns._generateDatum = function() {
  return {
    id: this._uid(),
    x: this._randomIntBetween(X_MIN, X_MAX),
    y: this._randomIntBetween(Y_MIN, Y_MAX),
    z: this._randomIntBetween(Z_MIN, Z_MAX),
  };
};

ns._randomIntBetween = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

ns._uid = function() {
  return cuid();
};

module.exports = ns;
