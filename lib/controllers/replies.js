var repliesRepo = require('./../db/repositories/replies-repo'),
  typicalController = require('./../utils/typical-controller')

exports.create = function(req, res) {
  var reqBody = req.body
  if (!reqBody.name || !reqBody.email || !reqBody.text) return res.send(400, 'name, email or text param missed')
  return repliesRepo.create(reqBody, function(err) {
    if (err) return res.send(500, err)
    return res.send()
  })
}

exports.all = typicalController.all(repliesRepo.all)