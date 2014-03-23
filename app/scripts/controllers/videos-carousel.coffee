'use strict'

angular.module('neoclassicApp')
  .controller 'VideosCarouselCtrl', ($scope, $http) ->
    $http.get('/api/videos').success (videos) ->
      $scope.videos = videos