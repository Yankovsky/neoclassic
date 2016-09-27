angular.module('neoclassicApp')
.factory 'navSvc', ($location, $timeout) ->
  navigateToHomePageAndScrollToVideos: () ->
    $location.path('/')
    $timeout ->
      videosElement = $('#videos')
      videosElementOffsetTop = videosElement.offset().top
      videosElementHeight = videosElement.height()
      windowHeight = $(window).height()
      $('body').scrollTop(videosElementOffsetTop - windowHeight / 2 + videosElementHeight / 2)
    , 500
