angular.module('neoclassicApp')
.controller 'SettingsCtrl', ($scope, Auth) ->
    $scope.messages = {}
    $scope.changePassword = (form) ->
      $scope.submitted = true
      if form.$valid
        Auth.changePassword($scope.user.newPassword)
        .then(->
            $scope.message = 'Password successfully changed.'
          , (err) ->
            $scope.message = err)