var pagesRepo = require('./../db/repositories/pages-repo'),
  typicalController = require('./../utils/typical-controller')

function validate(req) {
  var errors = {}
  var reqBody = req.body
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
  return errors
}

exports.create = typicalController.create(pagesRepo.create, validate)

exports.all = typicalController.all(pagesRepo.all)

exports.get = typicalController.get(pagesRepo.get)

exports.getBySlug = function(req, res) {
  var slug = req.params.slug
  if (!slug) return res.send(400, {slug: ['required']})
  return pagesRepo.getBySlug(slug, function(err, data) {
    if (err) return res.send(500, err)
    if (!data) return res.send(404, 'page with slug ' + slug + ' not found')
    return res.send(data)
  })
}

exports.update = typicalController.update(pagesRepo.update, validate)

exports.remove = typicalController.remove(pagesRepo.remove)