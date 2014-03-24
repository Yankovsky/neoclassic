angular.module('neoclassicApp')
  .controller 'AdminBarCtrl', ($scope, $location, Auth) ->
    $scope.logout = ->
      Auth.logout().then ->
        $location.path "/"