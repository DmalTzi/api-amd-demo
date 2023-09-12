const mongoose = require('mongoose')

const personnelSchema = new mongoose.Schema({
    username:{
        type:Number,
        require:true
    },
    drug_history:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'drug',
    },
    detail:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"detail",
    }
})

module.exports = mongoose.model("Personnel",personnelSchema)