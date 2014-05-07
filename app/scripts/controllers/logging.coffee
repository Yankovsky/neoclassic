angular.module('neoclassicApp')
  .controller 'LoggingCtrl', ($scope, loggingSvc) ->
    $scope.$watch ( -> loggingSvc.messages()), (newVal) -> $scope.messages = newVal