var mongoose = require('mongoose');


var user = mongoose.Schema({
    email : String,
    password : String
})


module.exports = mongoose.model('users',user);