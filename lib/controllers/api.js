var mongoose = require('mongoose'),
  Slide = mongoose.model('Slide'),
  Video = mongoose.model('Video')

function find(model) {
  return function(req, res) {
    return model.find(function(err, data) {
      if (!err) {
        return res.json(data)
      } else {
        return res.send(err)
      }
    })
  }
}

exports.slides = find(Slide)
exports.videos = find(Video)

exports.addVideo = function(req, res) {
  console.log(req, res)
  return res.json(req)
}

//
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
//      id: link,
//      title: item.snippet.title,
//      thumbnail: item.snippet.thumbnails.medium.url
//    })
//    console.log(JSON.stringify(ebala))
//
//  })
//})