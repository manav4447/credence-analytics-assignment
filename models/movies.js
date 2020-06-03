const mongoose = require("mongoose");
 const movieSchema  = new  mongoose.Schema({
//  const movie = new Schema({
     name : String,
     image : String,
     summary :  String,
     
 })
const movie = mongoose.model("movies", movieSchema )
 module.exports = movie