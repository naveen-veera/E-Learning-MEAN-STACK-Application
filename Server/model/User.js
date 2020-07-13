const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserDetail = new Schema({
    first_name : String ,
    last_name :  String ,
    email :  String ,
    phone : Number,
    group : String ,
    doj : String ,
    type : String 
});

const User = mongoose.model('User', UserDetail);

module.exports = { User };