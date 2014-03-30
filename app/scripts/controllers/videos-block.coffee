angular.module('neoclassicApp')
  .controller 'VideosBlockCtrl', ($scope, $http, youtubePlayerSvc) ->
#    todo shitty code ahead
    populateVideos = (videos) ->
#      if ($scope.videosGroupedByFour)
      $scope.videosGroupedByFour =
        _.groupBy(videos, (video, i) ->
          parseInt(i / 4)
        )

    $scope.videoUrl = 'http://www.youtube.com/watch?v=Sii4WAZXEoo'
    $scope.activeIndex = 0
    $http.get('/api/videos').success populateVideos

    $scope.play = (id) ->
      youtubePlayerSvc.play(id)

    $scope.add = ->
      $http.post('/api/videos',
        videoUrl: $scope.videoUrl
      ).success (savedVideo) ->
        $scope.videos.push(savedVideo)
        active = 0
        _.each($scope.videosGroupedByFour, (group, i) ->
          active = i if group.active
        )
        $scope.videosGroupedByFour = groupByFour()
        $scope.videosGroupedByFour[active].active = true

    $scope.move = (video, dir) ->
      $http.put('/api/videos/' + video.id,
        dir: dir
      ).success -> 
        console.log('LOLO')

    $scope.delete = (video) ->
      $http.delete('/api/videos/' + video.id)
      .success ->
          console.log('DELETE')
          
#        $scope.videos.splice(index, 1)
#        $scope.videos.push(savedVideo)