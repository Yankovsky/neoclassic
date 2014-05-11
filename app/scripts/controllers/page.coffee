angular.module('neoclassicApp')
.controller 'PageCtrl', ($scope, $http, $routeParams, $location) ->
    $http.get('/api/pages/' + $routeParams.slug)
    .success (page) ->
      $scope.page = page
    .error (data, status) ->
      if status is 404
        $location.path '/'