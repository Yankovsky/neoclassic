var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing')

exports.awesomeThings = function(req, res) {
  return Thing.find(function(err, things) {
    if (!err) {
      return res.json(things)
    } else {
      return res.send(err)
    }
  })
}

exports.slides = function(req, res) {
  return res.json([
    {
      src: 'images/slides/slide1.png',
      url: '/about',
      text: '«NeoClassic» - синтез классической, поп, рок музыки, академического вокала и других современных музыкальных направлений. Такое необычное совмещение вызывает широкийинтерес как у серьезной публики, настроенной на классику, так и у людей, привыкших к современному звучанию...'
    },
    {
      src: 'images/slides/slide2.png',
      url: '/contacts',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  ])
}

exports.videos = function(req, res) {
  return res.json([
    {
      id: "Alehe8AV0Vk",
      title: "Eurythmics - \"Sweet Dreams\" cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/Alehe8AV0Vk/default.jpg"
    },
    {
      id: "-nxfoM5gupQ",
      title: "Иванушки International - \"Тучи\" cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/-nxfoM5gupQ/default.jpg"
    },
    {
      id: "9e62_jv61JQ",
      title: "MAMMA MIA! - cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/9e62_jv61JQ/default.jpg"
    },
    {
      id: "LXk_xlu7gTk",
      title: "\"Parlami d'amore Mariù\" cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/LXk_xlu7gTk/default.jpg"
    },
    {
      id: "w3WxP-SeQ7M",
      title: "System Of A Down - Toxicity cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/w3WxP-SeQ7M/default.jpg"
    },
    {
      id: "sv8nOpisB9s",
      title: "\"The Show Must Go On\" cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/sv8nOpisB9s/default.jpg"
    },
    {
      id: "wsNO9PJYFeo",
      title: "\"Лишь о тебе мечтая\" cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/wsNO9PJYFeo/default.jpg"
    },
    {
      id: "zscl0-RzPlI",
      title: "\"Somebody That I Used To Know\" cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/zscl0-RzPlI/default.jpg"
    },
    {
      id: "C9NIch3DhxY",
      title: "\"Let It Be\" cover by Dmitriy Yankovskiy",
      thumbnail: "https://i1.ytimg.com/vi/C9NIch3DhxY/default.jpg"
    }
  ])
}