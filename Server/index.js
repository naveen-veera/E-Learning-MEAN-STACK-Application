const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./config/db.js');
var  user  = require('./controllers/userController');
var  squad  = require('./controllers/squadController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/user', user);
app.use('/squad', squad);
