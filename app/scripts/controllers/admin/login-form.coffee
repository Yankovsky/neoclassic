angular.module('neoclassicApp')
.controller 'LoginFormCtrl', ($scope, $location, Auth, form) ->
    $scope.user = {}
    $scope.serverErrors = {}
    $scope.login = () ->
      Auth.login($scope.user)
      .success ->
          $location.path '/admin'
      .error (errors) ->
          $scope.serverErrors = errors
          form($scope.loginForm).setServerErrors(errors)