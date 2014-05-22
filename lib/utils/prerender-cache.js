var request = require('request')

exports.recache = function(url, callback) {
  request.post('http://api.prerender.io/recache', {
    form: {
      prerenderToken: process.env.PRERENDER_TOKEN,
      url: url
    }
  }, callback)
}