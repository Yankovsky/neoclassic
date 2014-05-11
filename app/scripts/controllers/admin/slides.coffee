angular.module('neoclassicApp')
.controller 'AdminSlidesCtrl', ($scope, $http) ->
    $http.get('/api/slides').success (slides) ->
      $scope.slides = slides