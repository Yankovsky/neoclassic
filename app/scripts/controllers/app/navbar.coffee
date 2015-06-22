angular.module('neoclassicApp')
.controller 'NavbarCtrl', ($scope, $http, helpers, $location, $timeout) ->
    $http.get('/api/entries/pages')
    .success (pages) ->
      $scope.items = [
        {title: 'Афиша', path: '/events'}
        {title: 'Новости', path: '/news'}
        {title: 'Блог', path: '/posts'}
      ].concat(
        _.map(pages, (page) -> {title: page.title, path: '/' + page.slug})
      ).concat(
#      {title: 'Гостевая', path: '/guestbook'}
      )

    $scope.navigateToHomePageAndScrollToVideos = ->
      $location.path('/')
      $timeout ->
        videosElement = $('#videos')
        videosElementOffsetTop = videosElement.offset().top
        videosElementHeight = videosElement.height()
        windowHeight = $(window).height()
        $('body').scrollTop(videosElementOffsetTop - windowHeight / 2 + videosElementHeight / 2)
      , 500

    $scope.helpers = helpers