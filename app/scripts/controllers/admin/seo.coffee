angular.module('neoclassicApp')
.controller 'AdminSeoCtrl', ($scope, seo) ->
    $scope.$watch(
      () -> seo.get()
      (newVal) ->
        $scope.seo = newVal
    )

    $scope.save = ->
      seo.save($scope.seo).success ->
        alert('seo данные сохранены')