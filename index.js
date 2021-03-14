//https://www.educba.com/mongodb-unique/ mongodb tutorial
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const request = require("request");
const async = require("async");
const mongoose = require("mongoose");
const {users} = require("./models/users.js");
const {usersController} = require("./controllers/users-controller.js");
const {technosController} = require("./controllers/technos-controller.js");
const {wordsController} = require("./controllers/words-controller.js");
let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());

const not_require_login= ['/users/login'];

const myLogger = async function (req, res, next) {
    if(!not_require_login.includes(req.originalUrl)){
        current_user = await users.findById(req.cookies.id);
      if (current_user===null)
      {
        return res.status(401).send();
      }
    }
    next();
  }
  
app.use(myLogger);

mongoose.connect('mongodb://localhost/english_project');
let db = mongoose.connection;
usersController(app, request, mongoose);
technosController(app, request, mongoose);
wordsController(app, request, mongoose);


db.once("open", ()=>{
    console.log("connected to mongoDB");
});
db.on("error", (err)=>{
    console.log(err);
});
//import usersController from './controllers/users-controller.js';

app.listen('8010', ()=>{
    console.log("api is working");
});
//menuLoad().loadDivMenu();
