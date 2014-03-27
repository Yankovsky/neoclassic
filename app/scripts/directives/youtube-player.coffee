angular.module('neoclassicApp')
.directive('youtubePlayer', (youtubePlayerSvc, errorsSvc) ->
    template: '<div id="youtube-player"></div>'
    restrict: 'E',
    scope: {},
    link: (scope, element, attrs) ->
      scope.destroyed = false
      initYoutubePlayer = ->
        player = new YT.Player("youtube-player",
          height: "280"
          width: "470"
          videoId: "-XCI25XoQxY"
          events:
            onReady: ->
              youtubePlayerSvc.set player if !scope.destroyed
            onStateChange: ->
              errorsSvc.push('onStateChange', arguments)
            onError: (e) ->
              errorsSvc.push('ERROR PLAYER', arguments)
        )

      scope.$on('$destroy', ->
        scope.destroyed = true
        youtubePlayerSvc.set null
      )

      if YT? and YT.loaded
        initYoutubePlayer()
      else
        window.onYouTubeIframeAPIReady = ->
          initYoutubePlayer() if !scope.destroyed

      if !$('script[src="https://www.youtube.com/player_api"]').length
        tag = document.createElement("script")
        tag.src = "https://www.youtube.com/player_api"
        firstScriptTag = document.getElementsByTagName("script")[0]
        firstScriptTag.parentNode.insertBefore tag, firstScriptTag
  )