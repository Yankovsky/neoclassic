angular.module('neoclassicApp')
.controller 'NewsCtrl', ($scope, $http) ->
    $http.get('/api/entries/news').success (news) ->
      $scope.newsList = _.sortBy(news, 'datetime').reverse()