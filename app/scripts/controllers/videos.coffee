angular.module('neoclassicApp')
  .controller 'VideosCtrl', ($scope, $http, youtubePlayerSvc) ->
    $scope.$watchCollection ->
      $scope.videos
    , (newVal) ->
      $scope.videosGroupedByFour = _(newVal).groupBy((video, i) -> parseInt(i / 4)).toArray().value()

    $http.get('/api/videos').success (videos) ->
      $scope.videos = videos

    $scope.play = (id) ->
      youtubePlayerSvc.play(id)