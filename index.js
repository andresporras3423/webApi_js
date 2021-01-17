const express = require("express");
const app = express();
const request = require("request");
const async = require("async");
const mongoose = require("mongoose");
const {usersController} = require("./controllers/users-controller.js");


mongoose.connect('mongodb://localhost/english_project');
let db = mongoose.connection;
usersController(app, request);


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
