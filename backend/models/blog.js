const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title : {type:String, required:true},
    type : {type:String, required:true},
    description : {type:String, required:true},
    date : {type:String, required:true},
    bg : {type:String, required:true},
    subtitles : [{type:String, required:true}],
    paragraphs : [{type:String, required:true}],
    images : [{type:Array, required:true}],
    

})

module.exports = mongoose.model("Blog", blogSchema)