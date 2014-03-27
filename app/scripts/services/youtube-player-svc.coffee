angular.module('neoclassicApp')
  .factory 'youtubePlayerSvc', (errorsSvc) ->
    youtubePlayer = null
    play: (id) ->
      if youtubePlayer
        try
          youtubePlayer.asfafa()
          youtubePlayer.loadVideoById(id)
          youtubePlayer.playVideo()
        catch e
          errorsSvc.push(e)
    set: (player) ->
      youtubePlayer = player