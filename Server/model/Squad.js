const mongoose = require('mongoose'), Schema = mongoose.Schema;

const SquadDetail = new Schema({
    squad_name : String ,
    mentor : String ,
    lead_mentor :  String ,
    members : String ,
    member_count : Number 
});

const Squad = mongoose.model('Squad', SquadDetail);
module.exports = { Squad };