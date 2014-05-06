angular.module('neoclassicApp')
.controller 'NewsCtrl', ($scope, $http) ->
    $http.get('/api/news').success (news) ->
      $scope.news = news

    $scope.newNews = {}

    $scope.save = ->
      $http.post('/api/news', $scope.newNews).success ->
        $scope.news.push($scope.newNews)
        $scope.newNews = {}