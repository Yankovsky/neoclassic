var videosRepo = require('./../db/repositories/videos-repo'),
  youtubeVideoSvc = require('./../utils/youtube-video-svc'),
  typicalController = require('./../utils/typical-controller')

exports.create = function(req, res) {
  var videoId = youtubeVideoSvc.idByUrl(req.body.videoUrl)
  if (!videoId) res.send('ne rasparsit, pridumai oshibku andrey') //todo
  return youtubeVideoSvc.getVideoMetadata(videoId, function(err, data) {
    if (!err)
      return res.json(data)
    else
      return videosRepo.create(data, function(err) {
        if (!err) return res.send(err)
        console.log('sozdal vidos')
        return res.send('')
      })
  })
}

exports.all = typicalController.all(videosRepo.all)

exports.move = function(req, res) {
  return videosRepo.move(req.params.id, req.body.dir, function(err) {
    if (err) return res.send(err)
    console.log('MOVED')
    return res.send('')
  })
}

exports.remove = function(req, res) {
  return videosRepo.remove(req.params.id, function(err) {
    if (err) return res.send(err)
    console.log("removed")
    return res.send('')
  })
}