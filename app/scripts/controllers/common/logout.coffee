angular.module('neoclassicApp')
.controller 'LogoutCtrl', ($scope, $location, Auth) ->
  $scope.logout = ->
    Auth.logout().then ->
      $location.path '/'