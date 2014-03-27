var mongoose = require('mongoose'),
  Schema = mongoose.Schema

var SlideSchema = new Schema({
  image: String,
  imageUrl: String,
  text: String
})

mongoose.model('Slide', SlideSchema)