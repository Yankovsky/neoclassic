exports.all = function(repoCall) {
  return function(req, res) {
    return repoCall(function(err, data) {
      if (err) return res.send(500, err)
      res.json(data)
    })
  }
}