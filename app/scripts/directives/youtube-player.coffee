angular.module('neoclassicApp')
.directive('youtubePlayer', (youtubePlayerSvc, loggingSvc) ->
    template: '<div id="youtube-player"></div>'
    restrict: 'E',
    scope: {},
    link: (scope, element, attrs) ->
      # dimensions: 16/9, menu height = 30px
      scope.destroyed = false
      initYoutubePlayer = ->
        player = new YT.Player("youtube-player",
          height: "280"
          width: "440"
          videoId: "-XCI25XoQxY"
          events:
            onReady: ->
              youtubePlayerSvc.set player if !scope.destroyed
            onError: (errorCode) ->
              loggingSvc.push('Youtube player error ' + errorCode + errorCode.errorCode)
              scope.$apply()
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