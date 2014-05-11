angular.module('neoclassicApp')
.controller 'SeoCtrl', ($scope, seo) ->
    $scope.$watch(
      () -> seo.get()
      (newVal) ->
        $scope.seo = newVal
    )