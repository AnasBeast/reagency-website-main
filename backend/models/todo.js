const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
    name : {type:String, required:true},
    address : {type:String, required:true},
    country : {type:String, required:true},
    region : {type:String, required:true},
    style : {type:String, required:true},
    atmosphere : {type:String, required:true},
    amenagement : {type:Array, required:true},
    subtitle : {type:String, required:true},
    description : {type:String, required:true},
    images : [{type:String, required:true}],
    services : [{type:String, required:true}],
    exceptions : [{type:String, required:true}],
    rooms : [
        {
            name: {type:String, required:true},
            description: {type:String, required:true},
            img: {type:String, required:true},
        }
    ],
    feedback : [
        {
            name: {type:String, required:true},
            rate: {type:String, required:true},
            date: {type:String, required:true},
            note: {type:String, required:true},
        }
    ],
    informations : {
        pratiques : {
            address : {type:String, required:true},
            arrival : {type:String, required:true},
            departure : {type:String, required:true},
            rooms : {type:String, required:true},
            equipments : {type:String, required:true},
            animals : {type:String, required:true},
            publicSpace : {type:String, required:true},
            inRoom : {type:String, required:true},
            transfer : {type:String, required:true},
            kids : {type:String, required:true},
            smokers : {type:String, required:true},
            smokersRoom : {type:String, required:true},
            services : [{type:String, required:true}],
            inclus : [{type:String, required:true}],
        },
        restaurants : {
            cut : {type:String, required:true},
            bar : {type:String, required:true},
            breakfeastContinental : {type:String, required:true},
            breakfeastAmericain  : {type:String, required:true}
            
        },
        spa:{
            services : [{type:String, required:true}],
            loisirs : [{type:String, required:true}],
        }

    },
    stars : {type:String, required:true},
})

module.exports = mongoose.model("Hotel", hotelSchema)