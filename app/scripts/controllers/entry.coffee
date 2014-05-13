angular.module('neoclassicApp')
.controller 'EntryCtrl', ($scope, $http, $routeParams, $location) ->
    type = $routeParams.type || 'pages'
    slug = $routeParams.slug

    $http.get('/api/entries/' + type + '/' + slug)
    .success (entry) ->
      $scope.entry = entry
    .error (data, status) ->
      if status is 404
        $location.path '/'