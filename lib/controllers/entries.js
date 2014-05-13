var entriesRepo = require('./../db/repositories/entries-repo'),
  typicalController = require('./../utils/typical-controller'),
  _ = require('lodash')

function validate(req) {
  var reqBody = req.body
  if (!reqBody.slug) return {slug: 'required'}
  if (!reqBody.html) return {html: 'required'}
  if (!reqBody.title) return {title: 'required'}
  if (!reqBody.type) return {type: 'required'}
  if (!_.contains(['pages', 'news', 'events'], reqBody.type)) return {type: 'Type should be "pages", "news" or "events"'}
  if (reqBody.type != 'pages' && !reqBody.shortText) return {shortText: 'required'}
  if (reqBody.type != 'news' && !reqBody.datetime) return {datetime: 'required'}
  return null
}

exports.create = typicalController.create(entriesRepo.create, validate)

exports.allOfType = function(req, res) {
  var type = req.params.type
  if (!type) return res.send(400, {type: 'required'})
  return entriesRepo.allOfType(type, function(err, data) {
    if (err) return res.send(500, err)
    return res.send(data)
  })
}

exports.get = typicalController.get(entriesRepo.get)

exports.getByTypeAndSlug = function(req, res) {
  var type = req.params.type,
    slug = req.params.slug
  if (!type) return res.send(400, {type: 'required'})
  if (!slug) return res.send(400, {slug: 'required'})
  return entriesRepo.getByTypeAndSlug(type, slug, function(err, data) {
    if (err) return res.send(500, err)
    if (!data) return res.send(404, 'entry with type ' + type + ' and slug ' + slug + ' not found')
    return res.send(data)
  })
}

exports.update = typicalController.update(entriesRepo.update, validate)

exports.remove = typicalController.remove(entriesRepo.remove)