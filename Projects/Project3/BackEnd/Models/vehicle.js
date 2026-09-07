const { default: mongoose, model } = require("mongoose");

let Vehical=mongoose.Schema({
    name:String,
    model:String,
    type:{
        enum:["bike","bus","apv"]
    }
})
let vehicalODM = mongoose.model("Vehical",Vehical)
module.exports=vehicalODM
