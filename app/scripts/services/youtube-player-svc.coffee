angular.module('neoclassicApp')
  .factory 'youtubePlayerSvc', () ->
    youtubePlayer = null
    (newPlayer) ->
      youtubePlayer = newPlayer || youtubePlayer
      return youtubePlayer