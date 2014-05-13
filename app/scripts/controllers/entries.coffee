angular.module('neoclassicApp')
.controller 'EntriesCtrl', ($scope, $http, $location) ->
    type = $location.path().substr(1) || 'pages'

    $http.get('/api/entries/' + type)
    .success (entries) ->
        $scope.entries = entries
    .error (data, status) ->
        if status is 404
          $location.path '/'