const Detail = require("../models/detail")

exports.createDetail=async(data)=>{
    try{
        return await Detail.create(data)
    }catch(err){
        throw err
    }
}

exports.getSerial=async()=> {
    serial = ''
    for (let i=0;i<5;i++){
        serial += String(Math.floor(Math.random() * 10));
    }
    return await serial
}
