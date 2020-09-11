"use strict";

require("babel-polyfill");

var _assert = _interopRequireDefault(require("assert"));

var _prime = require("../controllers/prime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//require('../Prime').isPrime;  
describe('isPrimeNumber', function () {
  console.log("Hello");
  it('isPrimeNumber should return data for prime date. Else it should return Date is not prime', function () {
    _assert["default"].equal(false, (0, _prime.isPrimeNumber)());

    _assert["default"].equal(true, (0, _prime.isPrimeNumber)());
  });
});