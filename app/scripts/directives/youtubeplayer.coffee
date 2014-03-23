angular.module('neoclassicApp')
  .directive('youtubePlayer', () ->
    template: '<div class="player"></div>'
    restrict: 'E'
    link: (scope, element, attrs) ->
      element.text 'this is the youtubePlayer directive'
  )

#
#tag = document.createElement("script")
#tag.src = "https://www.youtube.com/player_api"
#firstScriptTag = document.getElementsByTagName("script")[0]
#firstScriptTag.parentNode.insertBefore tag, firstScriptTag
#player = undefined
#window.onYouTubePlayerAPIReady = ->
#  player = new YT.Player("youtube-player",
#    height: "300"
#    width: "470"
#    videoId: "-XCI25XoQxY"
#  )