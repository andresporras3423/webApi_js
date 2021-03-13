const {users} = require("../models/users.js");
const {technos} = require("../models/technos.js");
const mongoose = require("mongoose");

let wordsSchema = mongoose.Schema({
    word:{
        type: String,
        required: true
    },
    translation:{
        type: String,
        required: true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        async validate(value){
            if(await users.findById(mongoose.Types.ObjectId(value)) === null) throw new Error(`It doesn't exists a user with id: ${value}`);
        }
    },
    techno_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        async validate(value){
            if(await technos.findById(mongoose.Types.ObjectId(value)) === null) throw new Error(`It doesn't exists a techno with id: ${value}`);
        }
    }
});
wordsSchema.index({ techno_id: 1, user_id: 1,  word: 1}, { unique: true });
module.exports.words = mongoose.model('words', wordsSchema);