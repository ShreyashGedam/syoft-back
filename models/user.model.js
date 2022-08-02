const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {type : String , require : true },
    email : {type : String , require : true , unique : true},
    password : {type : String , require : true },
    phone : {type : String , require : true },
    role : {type : String}
})

const User = mongoose.model("user",userSchema)

module.exports = User