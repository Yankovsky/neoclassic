var _ = require('lodash')

exports.all = function(repoCall) {
  return function(req, res) {
    return repoCall(function(err, data) {
      if (err) return res.send(500, err)
      return res.send(data)
    })
  }
}

exports.get = function(repoCall) {
  return function(req, res) {
    var id = req.params.id
    if (!id) return res.send(400, {id: 'required'})
    return repoCall(id, function(err, data) {
      if (err) return res.send(500, err)
      if (!data) return res.send(404, 'record with id ' + id + ' not found')
      return res.send(data)
    })
  }
}

exports.remove = function(repoCall) {
  return function(req, res) {
    var id = req.params.id
    if (!id) return res.send(400, {id: 'required'})
    return repoCall(id, function(err) {
      if (err) return res.send(500, err)
      return res.send()
    })
  }
}