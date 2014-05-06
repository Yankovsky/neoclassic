angular.module('neoclassicApp')
  .controller 'VideosBlockCtrl', ($scope, $http, youtubePlayerSvc) ->
    getActiveIndex = () ->
      Math.max(_.findIndex($scope.videosGroupedByFour, (group) -> group.active), 0)

    populateVideos = () ->
      previousActiveIndex = getActiveIndex()
      videosGroupedByFour =
        _($scope.videos).groupBy((video, i) ->
          parseInt(i / 4)
        ).toArray().value()
      activeIndex = Math.min(previousActiveIndex, videosGroupedByFour.length - 1)
      # carousel stop working after reinit https://github.com/angular-ui/bootstrap/issues/1513
      # videosGroupedByFour[activeIndex].active = true
      # angular.element('.videos-block .carousel-indicators').scope().select(videosGroupedByFour[activeIndex])

      $scope.videosGroupedByFour = videosGroupedByFour

    $scope.newVideo = {}

    $http.get('/api/videos').success (videos) ->
      $scope.videos = videos
      populateVideos()

    $scope.play = (id) ->
      youtubePlayerSvc.play(id)

    $scope.add = ->
      $http.post('/api/videos',
        videoUrl: $scope.newVideo.url
      ).success (savedVideo) ->
        $scope.newVideo = {}
        $scope.videos.push(savedVideo)
        populateVideos()

    $scope.move = (videoToMove, dir) ->
      $http.post('/api/videos/' + videoToMove.id,
        dir: dir
      ).success (result) ->
        videoIndex =_.findIndex($scope.videos, (video) -> video.id == videoToMove.id)
        swappedVideoIndex =_.findIndex($scope.videos, (video) -> video.id == result.swappedVideoId)
        temp = $scope.videos[videoIndex]
        $scope.videos[videoIndex] = $scope.videos[swappedVideoIndex]
        $scope.videos[swappedVideoIndex] = temp
        populateVideos()

    $scope.delete = (videoToDelete) ->
      $http.delete('/api/videos/' + videoToDelete.id)
      .success ->
        index =_.findIndex($scope.videos, (video) -> video.id == videoToDelete.id)
        $scope.videos.splice(index, 1)
        populateVideos()