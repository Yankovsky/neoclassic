angular.module('neoclassicApp')
.controller 'PostsCtrl', ($scope, $http) ->
  $http.get('/api/entries/posts').success (posts) ->
    $scope.posts = _.sortBy(posts, 'datetime').reverse()