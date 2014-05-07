angular.module('neoclassicApp')
.controller 'AdminVideosCtrl', ($scope, $http, form) ->
    $scope.newVideo = {}
    $scope.serverErrors = {}

    $scope.add = ->
      $http.post '/api/videos',
        videoUrl: $scope.newVideo.videoUrl
      .success (savedVideo) ->
        $scope.newVideoForm.$setPristine()
        $scope.videos.push(savedVideo)
      .error (errors) ->
        $scope.serverErrors = errors
        form($scope.newVideoForm).setServerErrors(errors)

    $scope.move = (videoToMove, dir) ->
      $http.post '/api/videos/' + videoToMove.id,
        dir: dir
      .success (result) ->
        videoIndex =_.findIndex($scope.videos, (video) -> video.id == videoToMove.id)
        swappedVideoIndex =_.findIndex($scope.videos, (video) -> video.id == result.swappedVideoId)
        temp = $scope.videos[videoIndex]
        $scope.videos[videoIndex] = $scope.videos[swappedVideoIndex]
        $scope.videos[swappedVideoIndex] = temp

    $scope.delete = (videoToDelete) ->
      $http.delete('/api/videos/' + videoToDelete.id).success ->
        index =_.findIndex($scope.videos, (video) -> video.id == videoToDelete.id)
        $scope.videos.splice(index, 1)