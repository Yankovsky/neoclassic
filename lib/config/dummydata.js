var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing')

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
      name: 'HTML5 Boilerplate',
      info: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name: 'AngularJS',
      info: 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name: 'Karma',
      info: 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name: 'Express',
      info: 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }, {
      name: 'MongoDB + Mongoose',
      info: 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
      awesomeness: 10
    }, function() {
      console.log('finished populating things')
    }
  )
})

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, function() {
      console.log('finished populating users')
    }
  )
})


//var a = [
//  "Alehe8AV0Vk",
//  "-nxfoM5gupQ",
//  "9e62_jv61JQ",
//  "sv8nOpisB9s",
//  "C9NIch3DhxY",
//  "zscl0-RzPlI",
//  "wsNO9PJYFeo",
//  "LXk_xlu7gTk",
//  "w3WxP-SeQ7M"
//]
//var ebala = []
//_.each(a, function(link) {
//  $.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBre7588HFs1LWiIQIq0H9wNlbLPxVvfLQ&channelId=UCQ5-JCBn5DXFfCfXeth9V2Q&id=' + link, function(result) {
//    var item = result.items[0]
//    ebala.push({
//      url: link,
//      title: item.snippet.title,
//      thumbnail: item.snippet.thumbnails.default.url
//    })
//    console.log(JSON.stringify(ebala))
//
//  })
//})