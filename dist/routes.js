"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _assignment = _interopRequireDefault(require("./controllers/assignment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//console.log("hello");
var routes = (0, _express.Router)();
routes.get('/check-date', _assignment["default"].isPrimeNumber);
routes.get('/prod', function () {
  console.log("hello");
});
var _default = routes;
exports["default"] = _default;