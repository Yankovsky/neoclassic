var newsRepo = require('./../db/repositories/news-repo'),
  typicalController = require('./../utils/typical-controller'),
  _ = require('lodash')

function required(errors, reqBody, prop) {
  if (!reqBody[prop]) errors[prop] = 'Missed param ' + prop
}

function validate(req) {
  var errors = {},
    reqBody = req.body
  if (!reqBody.slug) {
    if (!errors.slug)
      errors.slug = []
    errors.slug.push('required')
  }
  if (!reqBody.html) {
    if (!errors.html)
      errors.html = []
    errors.html.push('required')
  }
  if (!reqBody.title) {
    if (!errors.title)
      errors.title = []
    errors.title.push('required')
  }
  if (!reqBody.shortText) {
    if (!errors.shortText)
      errors.shortText = []
    errors.shortText.push('required')
  }
  if (!reqBody.datetime) {
    if (!errors.datetime)
      errors.datetime = []
    errors.datetime.push('required')
  }
  return errors
}

exports.create = typicalController.create(newsRepo.create, validate)

exports.all = typicalController.all(newsRepo.all)

exports.get = typicalController.get(newsRepo.get)

exports.getBySlug = function(req, res) {
  var slug = req.params.slug
  if (!slug) return res.send(400, {slug: ['required']})
  return newsRepo.getBySlug(slug, function(err, data) {
    if (err) return res.send(500, err)
    if (!data) return res.send(404, 'news with slug ' + slug + ' not found')
    return res.send(data)
  })
}

exports.update = typicalController.update(newsRepo.update, validate)

exports.remove = typicalController.remove(newsRepo.remove)