angular.module('neoclassicApp')
.controller 'NavbarCtrl', ($scope, $http, helpers, navSvc) ->
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

    $scope.navigateToHomePageAndScrollToVideos = navSvc.navigateToHomePageAndScrollToVideos

    $scope.helpers = helpers
