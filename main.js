import express from 'express';
import path from 'path';
var app = express();

app.use(express.static(__dirname + '/../public'));

import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// import mongoose from 'mongoose';
// mongoose.connect('', { useMongoClient: true });
// mongoose.Promise = global.Promise;

import routes from './routes';
app.use('/api', routes);

app.all('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

app.listen(3000);
