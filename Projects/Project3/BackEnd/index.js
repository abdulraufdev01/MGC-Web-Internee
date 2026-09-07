const express=require(`express`)
const cors=require(`cors`)
const mongoose = require('mongoose')
const vehicalODM = require('./Models/vehicle')

require('dotenv').config()



let app =express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE_URL)
.then(res => console.log("DB connected"))
.catch(err => console.log(err))
    



app.post('/',async (req,res)=>{
   let data = req.body;
   console.log(data);
     
    let dbres = await vehicalODM.insertOne( data )
    res.json(dbres)
  
})


app.listen(8080,()=>console.log('server running'))
