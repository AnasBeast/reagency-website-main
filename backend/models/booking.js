const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    prenom : {type:String, required:true},
    nom : {type:String, required:true},
    pays : {type:String, required:true},
    email : {type:String, required:true},
    number : {type:String, required:true},
    message : {type:String, required:false},
    hotel : {type:String, required:true},
    room : {type:String, required:true},
    adultes : {type:String, required:true},
    enfants : {type:String, required:true},
    duree : {type:String, required:true},
})

module.exports = mongoose.model("Booking", bookingSchema)