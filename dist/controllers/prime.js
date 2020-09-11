"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  isPrimeNumber: function isPrimeNumber(req, res) {
    var currentDate = new Date("December 5, 1995 23:15:20");
    console.log(currentDate);
    console.log("day : " + currentDate.getDate());
    var day = currentDate.getDate();
    var flag = true;

    for (var i = 2; i <= day - 1; i++) {
      if (day % i == 0) {
        flag = false;
        break;
      }
    }

    if (flag == true) {
      console.log("data");
      (0, _nodeFetch["default"])("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=".concat(_config["default"].api_key)).then(function (response) {
        return response.json();
      }).then(function (data) {
        return res.status(200).json(data);
      })["catch"](function (err) {
        res.status(500).json({
          message: err.message || "Something wrong while retrieving data."
        });
      });
    } else {
      res.json("Date is not prime so no data");
    }
  }
};
exports["default"] = _default;