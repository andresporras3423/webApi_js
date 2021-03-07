const mongoose = require("mongoose");

let technosSchema = mongoose.Schema({
    techno_name:{
        type: String,
        required: true
    },
    techno_status:{
        type: Boolean,
        required: true
    }
    // ,
    // _id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // }
});
module.exports.technos = mongoose.model('technos', technosSchema);