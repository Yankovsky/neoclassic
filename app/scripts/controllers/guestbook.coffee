angular.module('neoclassicApp')
.controller 'GuestbookCtrl', ($scope, $http) ->
    $scope.newReply = {}
    $http.get('/api/replies').success (replies) ->
      $scope.replies = replies

    $scope.create = ->
      newReply = _.clone($scope.newReply)
      $http.post('/api/replies', newReply).success () ->
        $scope.replies.unshift(newReply)
        $scope.newReply = {}
        $scope.newReplyForm.$setPristine()