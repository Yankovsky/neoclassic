var videosRepo = require('./../db/repositories/videos-repo'),
  youtubeVideoSvc = require('./../utils/youtube-video-svc'),
  typicalController = require('./../utils/typical-controller')

exports.create = function(req, res) {
  var videoUrl = req.body.videoUrl
  if (!videoUrl) return res.send(400, 'videoUrl body param is missed')
  var videoId = youtubeVideoSvc.idByUrl(videoUrl)
  if (!videoId) res.send(400, 'cannot parse this youtube url ' + videoUrl)
  return youtubeVideoSvc.getVideoMetadata(videoId, function(err, data) {
    if (err) return res.json(500, err)
    return videosRepo.create(data, function(err, id) {
      if (err) return res.send(500, err)
      data.id = id
      return res.send(data)
    })
  })
}

exports.all = typicalController.all(videosRepo.all)

exports.move = function(req, res) {
  var id = req.params.id,
    dir = req.body.dir
  if (!id) return res.send(400, 'id param is missed')
  if (!dir) return res.send(400, 'dir param is missed')
  videosRepo.move(id, dir, function(err, data) {
    if (err) return res.send(500, err)
    res.send(data)
  })
}

exports.remove = function(req, res) {
  var id = req.params.id
  if (!id) return res.send(400, 'id param is missed')
  return videosRepo.remove(id, function(err) {
    if (err) return res.send(500, err)
    res.send()
  })
}