var pagesRepo = require('./../db/repositories/pages-repo'),
  _ = require('lodash'),
  typicalController = require('./../utils/typical-controller')

exports.create = function(req, res) {
  var reqBody = req.body
  if (!reqBody.slug) return res.send(400, 'slug param missed')
  if (!reqBody.html) return res.send(400, 'html param missed')
  return pagesRepo.create(reqBody, function(err) {
    if (err) return res.send(500, err)
    return res.send()
  })
}

exports.all = typicalController.all(pagesRepo.all)

exports.get = typicalController.get(pagesRepo.get)

exports.getBySlug = function(req, res) {
  var slug = req.params.slug
  if (!slug) return res.send(400, 'slug param is missed')
  return pagesRepo.getBySlug(slug, function(err, data) {
    if (err) return res.send(500, err)
    if (!data) return res.send(404, 'page with slug ' + slug + ' not found')
    return res.send(data)
  })
}

exports.update = function(req, res) {
  var id = req.params.id,
      reqBody = req.body
  if (!id) return res.send(400, 'id param is missed')
  if (!reqBody.slug) return res.send(400, 'slug param missed')
  if (!reqBody.html) return res.send(400, 'html param missed')
  return pagesRepo.update(id, reqBody, function(err, data, result) {
    if (err) return res.send(500, err)
    if (!result.rowCount) return res.send(404, 'page with id ' + id + ' not found')
    return res.send()
  })
}

exports.remove = typicalController.remove(pagesRepo.remove)