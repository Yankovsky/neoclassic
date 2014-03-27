angular.module('neoclassicApp')
  .controller 'AdminBarCtrl', ($scope, $location, Auth, errorsSvc) ->
    $scope.logout = ->
      Auth.logout().then ->
        $location.path "/"

    $scope.$watch(->
      errorsSvc.errors()
    , (newVal, oldVal) ->
      $scope.errors = newVal
    )