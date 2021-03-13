const mongoose = require("mongoose");

let usersSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        index: true
    },
    pass:{
        type: String,
        required: true
    }
});
module.exports.users = mongoose.model('users', usersSchema);