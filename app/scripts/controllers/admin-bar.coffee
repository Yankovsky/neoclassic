angular.module('neoclassicApp')
  .controller 'AdminBarCtrl', ($scope, $location, Auth, loggingSvc) ->
    $scope.logout = ->
      Auth.logout().then ->
        $location.path "/"

    $scope.$watch(->
      loggingSvc.messages()
    , (newVal, oldVal) ->
      $scope.messages = newVal
    )