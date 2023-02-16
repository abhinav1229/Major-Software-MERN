const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    // token:{
    //     type:String,
    //     default:''
    // }
})

// token used for reset the password

module.exports = mongoose.model('users', userSchema);