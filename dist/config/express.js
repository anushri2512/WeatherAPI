"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("./config"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// for securing server routes
//get app
var app = (0, _express["default"])(); //logger

if (_config["default"].env === 'development') {
  app.use((0, _morgan["default"])('dev'));
} //secure apps http


app.use((0, _helmet["default"])()); //allow cors

app.use((0, _cors["default"])()); //api routes

app.use('/api/', _routes["default"]);
var _default = app;
exports["default"] = _default;