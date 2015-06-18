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
        helpers.scrollTo('videos')
      , 500

    $scope.helpers = helpers