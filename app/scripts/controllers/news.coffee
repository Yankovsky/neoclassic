angular.module('neoclassicApp')
.controller 'NewsCtrl', ($scope, $http) ->
    $http.get('/api/news/').success (news) ->
      $scope.news = news