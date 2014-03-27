var mongoose = require('mongoose'),
  fs = require('fs'),
  User = mongoose.model('User'),
  Slide = mongoose.model('Slide'),
  Video = mongoose.model('Video')

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Slide.find({}).remove(function() {
  Slide.create({
    imageUrl: 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide1.jpg',
    url: '/about',
    text: 'Друзья!  Я с радостью представляю Вам мой сольный проект NeoClassic – «Новая Классика Дмитрия Янковского». NeoClassic соединяет в себе различные и, казалось бы, несовместимые направления в музыке: оперу, поп-музыку, рок, битбокс, рэп и некоторые другие. NeoClassic – это мой взгляд на то, как должен развиваться современный мир музыки в России...',
  }, {
    imageUrl: 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide2.jpg',
    url: '/contacts',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  })
})

Video.find({}).remove(function() {
  Video.create(
    {"id": "-nxfoM5gupQ", "title": "Иванушки International - \"Тучи\" cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/-nxfoM5gupQ/mqdefault.jpg"},
    {"id": "sv8nOpisB9s", "title": "\"The Show Must Go On\" cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/sv8nOpisB9s/mqdefault.jpg"},
    {"id": "w3WxP-SeQ7M", "title": "System Of A Down - Toxicity cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/w3WxP-SeQ7M/mqdefault.jpg"},
    {"id": "wsNO9PJYFeo", "title": "\"Лишь о тебе мечтая\" cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/wsNO9PJYFeo/mqdefault.jpg"},
    {"id": "Alehe8AV0Vk", "title": "Eurythmics - \"Sweet Dreams\" cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/Alehe8AV0Vk/mqdefault.jpg"},
    {"id": "9e62_jv61JQ", "title": "MAMMA MIA! - cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/9e62_jv61JQ/mqdefault.jpg"},
    {"id": "C9NIch3DhxY", "title": "\"Let It Be\" cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/C9NIch3DhxY/mqdefault.jpg"},
    {"id": "LXk_xlu7gTk", "title": "\"Parlami d'amore Mariù\" cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/LXk_xlu7gTk/mqdefault.jpg"},
    {"id": "zscl0-RzPlI", "title": "\"Somebody That I Used To Know\" cover by Dmitriy Yankovskiy", "thumbnail": "https://i1.ytimg.com/vi/zscl0-RzPlI/mqdefault.jpg"}
  )
})

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, function() {
      console.log('finished populating users')
    }
  )
})