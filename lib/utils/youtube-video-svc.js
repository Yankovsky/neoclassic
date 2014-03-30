var request = require('request')

var key = 'AIzaSyBre7588HFs1LWiIQIq0H9wNlbLPxVvfLQ&channelId=UCQ5-JCBn5DXFfCfXeth9V2Q',
  youtubeIdByUrlRegexp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/

exports.idByUrl = function(url) {
  var match = url.match(youtubeIdByUrlRegexp)
  if (match && match[2].length === 11) return match[2]
  return null
}

exports.getVideoMetadata = function(videoId, callback) {
  request.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&key=' + key + '&id=' + videoId, function(error, response, body) {
    if (error) return error
    var item = JSON.parse(body).items[0]
    return new {
      videoId: videoId,
      title: item.snippet.title,
      thumbnailUrl: item.snippet.thumbnails.medium.url
    }
  })
}