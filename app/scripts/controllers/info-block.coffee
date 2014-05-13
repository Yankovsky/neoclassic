angular.module('neoclassicApp')
.controller 'InfoBlockCtrl', ($scope, $http) ->
    $http.get('/api/entries/news').success (news) ->
      $scope.latestNews = news.slice(0, 3)
      $scope.featuredNews = news[0]

    $http.get('/api/entries/events').success (events) ->
      $scope.events = events.slice(0, 4)