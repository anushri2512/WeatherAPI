"use strict";

var _product = _interopRequireDefault(require("../models/product"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect('mongodb://localhost:27017/shopping');

var products = [new _product["default"]({
  imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGGlekb7DT5NUuXHinejLcjxURhA7lMwI83xkhPGJpGPnWLX0E',
  title: 'Veg Noodles',
  description: 'Tasty Veg Noodles only for 110',
  price: 110 //"id": 1

}), new _product["default"]({
  imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-n54VZPot-cyXEcwjJTfV6dZHgl0p9GE5aAVfBqglt8HsiSta',
  title: 'Samosa',
  description: 'Tasty Samosa only for 110',
  price: 110 //"id": 1

}), new _product["default"]({
  imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEkJrpSsxbEPrB36AavAN7qUb4IZ91_qKAzxjBYgFzGKveHS0C',
  title: 'Sambar Vada',
  description: 'Tasty Sambar Vada only for 110',
  price: 110 //"id": 1

}), new _product["default"]({
  imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScRTe-iOfXu9kWjLt2IMt6LcuWM5-MExzwskznUosdL9YERZpO',
  title: 'South Indian Dosa',
  description: 'Tasty South Indian Dosa only for 110',
  price: 110 //"id": 1

}), new _product["default"]({
  imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS73PbLXtHjIXpxYqZcgz0YNffesYyOj6kHcxl_NxmkbNqlT4h',
  title: 'Spring rolls',
  description: 'Tasty Spring rolls only for 110',
  price: 110 //"id": 1

})];
var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;

    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  _mongoose["default"].disconnect();
}