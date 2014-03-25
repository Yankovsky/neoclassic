angular.module('neoclassicApp')
  .controller 'VideosBlockCtrl', ($scope, $http, youtubePlayerSvc) ->
    $http.get('/api/videos').success (videos) ->
      $scope.videosGroupedByFour = _.groupBy(videos, (video, i) ->
        return parseInt(i / 4)
      )
      $scope.playVideo = (id) ->
        youtubePlayerSvc() && youtubePlayerSvc().loadVideoById(id)