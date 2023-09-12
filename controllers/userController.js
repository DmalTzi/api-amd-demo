const {findOneIdentity,findOneIdenAndUpdate} = require("../repository/identity.repository")
const line = require("@line/bot-sdk")

const config = {
    channelAccessToken:process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret:process.env.CHANNEL_SECRET
}

const client = new line.Client(config)

exports.login=async(req,res)=>{
    const {username,password,Luserid} = req.body
    try{
        const findiden = await findOneIdentity(username)
        console.log(Luserid)
        if(findiden.password === password){
            await client.linkRichMenuToUser(Luserid, process.env.MAIN_RICH)
            await findOneIdenAndUpdate({username,Luserid})
            res.status(200).json({username})
        }else{
            res.json({
                noti:"รหัสไม่ถูกต้อง"
            })
        }
    }catch(err){
        console.log(err)
    }
}