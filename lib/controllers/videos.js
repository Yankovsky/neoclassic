var videosRepo = require('./../db/repositories/videos-repo'),
  youtubeVideoSvc = require('./../utils/youtube-video-svc'),
  typicalController = require('./../utils/typical-controller'),
  _ = require('lodash')

exports.create = function(req, res) {
  var videoUrl = req.body.videoUrl
  if (!videoUrl) return res.send(400, {videoUrl: 'required'})
  var videoId = youtubeVideoSvc.idByUrl(videoUrl)
  if (!videoId) return res.send(400, {videoUrl: 'Неправильная ссылка ' + videoUrl})
  return youtubeVideoSvc.getVideoMetadata(videoId, function(err, data) {
    if (err) return res.send(500, err)
    if (!data) return res.send(404, 'Не существует видео с id ' + videoId)
    return videosRepo.create(data, function(err, id) {
      if (err) return res.send(500, err)
      data.id = id
      return res.send(201, data)
    })
  })
}

exports.all = typicalController.all(videosRepo.all)

exports.move = function(req, res) {
  var id = req.params.id,
    dir = req.body.dir
  if (!id) return res.send(400, {id: 'required'})
  if (!dir) return res.send(400, {dir: 'required'})
  return videosRepo.move(id, dir, function(err, data) {
    if (err) return res.send(500, err)
    return res.send(data)
  })
}

exports.remove = typicalController.remove(videosRepo.remove)