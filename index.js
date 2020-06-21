const restify = require('restify');
const mongoose = require('mongoose');
const restify_jwt = require('restify-jwt-community');
const express = require('express');
require('dotenv').config()

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const server = restify.createServer();
server.use(restify.plugins.bodyParser());




//application routes
const map_route = require('./routes/main');




//listen to server event
app.listen(process.env.PORT || 5000, () => {
    console.log("server start at port 5000");
    app.use('/api', map_route)
});

