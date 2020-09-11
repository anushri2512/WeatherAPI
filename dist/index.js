"use strict";

var _express = _interopRequireDefault(require("./config/express"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//initialize sql
//require('./config/sql');
//listen on  port
_express["default"].listen(_config["default"].port, function () {
  console.log("Server started at port".concat(_config["default"].port));
});