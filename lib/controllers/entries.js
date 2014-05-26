var entriesRepo = require('./../db/repositories/entries-repo'),
  typicalController = require('./../utils/typical-controller'),
  _ = require('lodash'),
  prerenderCache = require('./../utils/prerender-cache')

function url(path, type, req) {
  if (type == 'news' || type == 'events')
    path = type + '/' + path
  return req.protocol + '://' + req.get('host') + '/' + path
}

function validate(req) {
  var reqBody = req.body
  if (!(reqBody.type == 'events' && reqBody.simplified)) {
    if (!reqBody.slug) return {slug: 'required'}
    if (!reqBody.html) return {html: 'required'}
  }
  if (!reqBody.title) return {title: 'required'}
  if (!reqBody.type) return {type: 'required'}
  if (!_.contains(['pages', 'news', 'events'], reqBody.type)) return {type: 'Type should be "pages", "news" or "events"'}
  if (reqBody.type != 'pages' && !reqBody.shortText) return {shortText: 'required'}
  if (reqBody.type != 'pages' && !reqBody.datetime) return {datetime: 'required'}
  return null
}

exports.create = function(req, res) {
  var reqBody = req.body
  var error = validate(req)
  if (error) return res.send(400, error)
  return entriesRepo.create(reqBody, function(err) {
    if (err) return res.send(500, err)
    return prerenderCache.recache(url(reqBody.slug, reqBody.type, req), function(error, response, body) {
      return res.send(201, error)
    })
  })
}

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

exports.update = function(req, res) {
  var id = req.params.id,
    reqBody = req.body
  if (!id) return res.send(400, {id: 'required'})
  var error = validate(req)
  if (error) return res.send(400, error)
  return entriesRepo.update(id, reqBody, function(err, data, result) {
    if (err) return res.send(500, err)
    if (!result.rowCount) return res.send(404, 'page with id ' + id + ' not found')
    return prerenderCache.recache(url(reqBody.slug, reqBody.type, req), function(error, response, body) {
      return res.send(error)
    })
  })
}

exports.remove = typicalController.remove(entriesRepo.remove)