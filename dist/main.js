'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname + '/../public'));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// import mongoose from 'mongoose';
// mongoose.connect('', { useMongoClient: true });
// mongoose.Promise = global.Promise;

app.use('/api', _routes2.default);

app.all('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname + '/../public/index.html'));
});

app.listen(3000);