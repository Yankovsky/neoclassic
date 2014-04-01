var pagesRepo = require('./../db/repositories/pages-repo')

exports.get = function(req, res) {
  var pageName = req.params.pageName
  if (!pageName) return res.send(400, 'pageName param is missed')
  return pagesRepo.get(pageName, function(err, data) {
    if (err) return res.send(500, err)
    if (!data) return res.send(404, 'page with name ' + pageName + ' not found')
    return res.send(data)
  })
}

exports.update = function(req, res) {
  var pageName = req.params.pageName,
    reqBody = req.body
  if (!pageName) return res.send(400, 'pageName param is missed')
  if (!reqBody.text) return res.send(400, 'text param is missed')
  pagesRepo.update(pageName, reqBody.text, reqBody.topImageUrl, reqBody.rightImageUrl, function(err, data, result) {
    if (err) return res.send(500, err)
    if (!result.rowCount) return res.send(404, 'page with name ' + pageName + ' not found')
    res.send()
  })
}