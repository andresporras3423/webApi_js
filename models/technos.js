const {users} = require("../models/users.js");
const mongoose = require("mongoose");

let technosSchema = mongoose.Schema({
    techno_name:{
        type: String,
        required: true
    },
    techno_status:{
        type: Boolean,
        required: true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        async validate(value){
            if(await users.findById(mongoose.Types.ObjectId(value)) === null) throw new Error(`It doesn't exists a user with id: ${value}`);
        }
    }
});
technosSchema.index({ techno_name: 1, user_id: 1 }, { unique: true });
module.exports.technos = mongoose.model('technos', technosSchema);