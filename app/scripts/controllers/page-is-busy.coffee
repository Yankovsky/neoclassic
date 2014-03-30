angular.module('neoclassicApp')
  .controller 'PageIsBusyCtrl', ($scope, pageIsBusy) ->
    $scope.$watch('pageIsBusy', (newVal, oldVal) ->
      $scope.pageIsBusy = newVal
    )