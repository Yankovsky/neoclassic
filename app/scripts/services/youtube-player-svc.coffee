angular.module('neoclassicApp')
  .factory 'youtubePlayerSvc', () ->
    youtubePlayer = null
    play: (id) ->
      if youtubePlayer
        youtubePlayer.cueVideoById(id, 0.5)
        youtubePlayer.playVideo()
    set: (player) ->
      youtubePlayer = player