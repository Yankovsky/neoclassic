angular.module('neoclassicApp')
  .factory 'youtubePlayerSvc', () ->
    youtubePlayer = null
    play: (id) ->
      youtubePlayer.loadVideoById(id) if youtubePlayer
    set: (player) ->
      youtubePlayer = player