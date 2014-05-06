var _ = require('lodash')

exports.create = function(repoCall, additionalValidate) {
  return function(req, res) {
    var reqBody = req.body
    var errors = additionalValidate(req)
    if (!_.isEmpty(errors))
      return res.send(400, errors)
    return repoCall(reqBody, function(err) {
      if (err) return res.send(500, err)
      return res.send(201)
    })
  }
}

exports.all = function(repoCall) {
  return function(req, res) {
    return repoCall(function(err, data) {
      if (err) return res.send(500, err)
      res.send(data)
    })
  }
}

exports.get = function(repoCall) {
  return function(req, res) {
    var id = req.params.id
    if (!id) return res.send(400, {id: ['required']})
    return repoCall(id, function(err, data) {
      if (err) return res.send(500, err)
      if (!data) return res.send(404, 'record with id ' + id + ' not found')
      return res.send(data)
    })
  }
}

exports.update = function(repoCall, additionalValidate) {
  return function(req, res) {
    var id = req.params.id,
      reqBody = req.body
    var errors = additionalValidate(req)
    if (!id) {
      if (!errors.id)
        errors.id = []
      errors.id.push('required')
    }
    if (!_.isEmpty(errors))
      return res.send(400, errors)
    return repoCall(id, reqBody, function(err, data, result) {
      if (err) return res.send(500, err)
      if (!result.rowCount) return res.send(404, 'page with id ' + id + ' not found')
      return res.send()
    })
  }
}

exports.remove = function(repoCall) {
  return function(req, res) {
    var id = req.params.id
    if (!id) return res.send(400, {id: ['required']})
    return repoCall(id, function(err) {
      if (err) return res.send(500, err)
      res.send()
    })
  }
}