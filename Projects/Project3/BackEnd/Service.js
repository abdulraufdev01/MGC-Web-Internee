const { default: mongoose } = require("mongoose");
require('dotenv').config()
async function ConnectDB() {
    console.log(process.env.BackEnd);
    
        await mongoose.connect(process.env.DATABASE_URL).then(res=> console.log("DB connected")).catch(err => console.log(err))
    
}

module.exports = ConnectDB