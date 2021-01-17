const express = require("express");
const app = express();
const request = require("request");
const async = require("async");
const {usersController} = require("./controllers/users-controller.js");

usersController(app, request);
//import usersController from './controllers/users-controller.js';

app.listen('8010', ()=>{
    console.log("api is working");
});
//menuLoad().loadDivMenu();
