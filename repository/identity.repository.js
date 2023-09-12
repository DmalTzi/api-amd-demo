const Identity = require('../models/identity')

exports.findOneIdentity=async(data)=>{
    try{
        return await Identity.findOne({"username":data})
    }catch(err){
        console.log(err)
    }
}

exports.findOneIdenAndUpdate=async({username,Luserid})=>{
    try{
        return await Identity.findOneAndUpdate({username},{Luserid},{new:true})
    }catch(err){
        console.log(err)
    }
}