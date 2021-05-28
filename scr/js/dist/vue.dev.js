"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _datebase = require("./datebase.js");

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue !',
    clients: _datebase.clients
  }
});
exports.app = app;