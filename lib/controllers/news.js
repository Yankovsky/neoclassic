var entriesRepo = require('./../db/repositories/pages-repo'),
  _ = require('lodash')

function wrongType(type) {
  return !_.contains(['pages', 'news', 'events'], type)
}

function required(errors, reqBody, prop) {
  if (!reqBody[prop]) errors[prop] = 'Missed param ' + prop
}

function valid(res, reqBody) {
  var errors = {}

  var type = reqBody.type
  if (wrongType(type)) errors.type = 'Missed or wrong type ' + type
  _.each(['urlSlug', 'title', 'description', 'keywords', 'html'], function(prop) {
    required(errors, reqBody, prop)
  })
  if (type == 'news' || type == 'events') {
    required(errors, reqBody, 'shortText')
    required(errors, reqBody, 'datetime')
  }
  if (type == 'events')
    required(errors, reqBody, 'thumbnailUrl')

  if (!errors) {
    res.send(400, JSON.stringify(errors))
    return false
  }
  return true
}

exports.create = function(req, res) {
  var reqBody = req.body
  if (valid(res, reqBody))
    return entriesRepo.create(reqBody, function(err) {
      if (err) return res.send(500, err)
      return res.send()
    })
}

exports.get = function(req, res) {
  var urlSlug = req.params.urlSlug,
    type = req.params.type
  if (!urlSlug) return res.send(400, 'urlSlug param is missed')
  if (wrongType(type)) return res.send(400, 'wrong or missed type ' + type)
  return entriesRepo.get(urlSlug, type, function(err, data) {
    if (err) return res.send(500, err)
    if (!data) return res.send(404, 'entry with url slug ' + urlSlug + ' and type ' + type + ' not found')
    return res.send(data)
  })
}

exports.update = function(req, res) {
  var urlSlug = req.params.urlSlug,
    type = req.params.type,
    reqBody = req.body
  if (!urlSlug) return res.send(400, 'url slug param is missed')
  if (valid(res, reqBody))
    return entriesRepo.update(urlSlug, type, reqBody, function(err, data, result) {
      if (err) return res.send(500, err)
      if (!result.rowCount) return res.send(404, 'entry with url slug ' + urlSlug + ' and type ' + type + ' not found')
      return res.send()
    })
}