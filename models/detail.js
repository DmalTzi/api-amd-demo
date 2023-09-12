const mongoose = require("mongoose")

const detailSchema = new mongoose.Schema({
    statue:{
        type:Boolean,
        require:true,
        default:false
    },
    serialnumber:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("detail",detailSchema)
