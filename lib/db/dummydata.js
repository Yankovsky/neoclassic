var _ = require('lodash'),
  usersRepo = require('./repositories/users-repo'),
  videosRepo = require('./repositories/videos-repo'),
  slidesRepo = require('./repositories/slides-repo')

_([{
  imageUrl: 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide1.jpg',
  url: '/about',
  text: 'Друзья!  Я с радостью представляю Вам мой сольный проект NeoClassic – «Новая Классика Дмитрия Янковского». NeoClassic соединяет в себе различные и, казалось бы, несовместимые направления в музыке: оперу, поп-музыку, рок, битбокс, рэп и некоторые другие. NeoClassic – это мой взгляд на то, как должен развиваться современный мир музыки в России...',
}, {
  imageUrl: 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide2.jpg',
  url: '/contacts',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}]).forEach(function(slide) {
  slidesRepo.create(slide, function() {
    console.log('add slide')
  })
})

_([
  {"videoId": "-nxfoM5gupQ", "title": "Иванушки International - \"Тучи\" cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/-nxfoM5gupQ/mqdefault.jpg"},
  {"videoId": "sv8nOpisB9s", "title": "\"The Show Must Go On\" cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/sv8nOpisB9s/mqdefault.jpg"},
  {"videoId": "w3WxP-SeQ7M", "title": "System Of A Down - Toxicity cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/w3WxP-SeQ7M/mqdefault.jpg"},
  {"videoId": "wsNO9PJYFeo", "title": "\"Лишь о тебе мечтая\" cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/wsNO9PJYFeo/mqdefault.jpg"},
  {"videoId": "Alehe8AV0Vk", "title": "Eurythmics - \"Sweet Dreams\" cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/Alehe8AV0Vk/mqdefault.jpg"},
  {"videoId": "9e62_jv61JQ", "title": "MAMMA MIA! - cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/9e62_jv61JQ/mqdefault.jpg"},
  {"videoId": "C9NIch3DhxY", "title": "\"Let It Be\" cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/C9NIch3DhxY/mqdefault.jpg"},
  {"videoId": "LXk_xlu7gTk", "title": "\"Parlami d'amore Mariù\" cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/LXk_xlu7gTk/mqdefault.jpg"},
  {"videoId": "zscl0-RzPlI", "title": "\"Somebody That I Used To Know\" cover by Dmitriy Yankovskiy", "thumbnailUrl": "https://i1.ytimg.com/vi/zscl0-RzPlI/mqdefault.jpg"}
]).forEach(function(video) {
  videosRepo.create(video, function() {
    console.log('add video' + video.videoId)
  })
})

usersRepo.create({
    email: 'test@test.com',
    provider: 'local',
    password: 'test'
  }, function() {
    console.log('finished populating users')
  }
)