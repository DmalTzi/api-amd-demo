const Personnel = require("../models/personnel")

exports.craetePersonnel = async(data) =>{
    try{
        return await Personnel.create(data)
    }catch(err){
        throw err
    }
}