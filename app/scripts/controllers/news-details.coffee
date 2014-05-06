angular.module('neoclassicApp')
.controller 'NewsDetailsCtrl', ($scope, $http, $routeParams, $sce, $location) ->
    slug = $routeParams.slug

    $scope.news = {}

    $http.get('/api/news/' + slug)
    .success (news) ->
        $scope.news = news
    .error (data, status) ->
        if status is 404
          $location.path '/'


    $scope.update = ->
      $http.put('/api/news/' + $scope.news.id, $scope.news)
      .success () ->
          alert('Сохранено')
      .error () ->
          alert('Ошибка')
          throw JSON.stringify(arguments)