var mongoose = require('mongoose'),
  Schema = mongoose.Schema

var VideoSchema = new Schema({
  id: String,
  title: String,
  thumbnail: String
})

//VideoSchema.path('awesomeness').validate(function(num) {
//  return num >= 1 && num <= 10
//}, 'Awesomeness must be between 1 and 10')

mongoose.model('Video', VideoSchema)