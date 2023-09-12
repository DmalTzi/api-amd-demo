const router = require("express").Router()
const {createDrug} = require("../repository/drug.repository")
const {createDetail, getSerial} = require("../repository/detail.repository")
const {craetePersonnel} = require("../repository/personnel.repository")

router.post("/create", async(req,res)=>{
    const {age, weight, symptom, painlv, cosymptom, allergic, relevant, eatenago, username} = req.body
    try{
        const drug = await createDrug({age, weight, symptom, painlv, cosymptom, allergic, relevant, eatenago})
        const detail = await createDetail({statue:false, serialnumber:await getSerial()})
        const personnel = await craetePersonnel({username,drug_history:drug._id,detail:detail._id})
    }catch(err){
        console.log(err)
    }
})

module.exports = router