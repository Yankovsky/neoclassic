exports.all = function(repoCall) {
  return function(req, res) {
    return repoCall(function(err, data) {
      if (!err) {
        return res.json(data)
      } else {
        return res.send(err)
      }
    })
  }
}