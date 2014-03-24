angular.module('neoclassicApp')
  .controller 'SliderCtrl', ($scope, $http) ->
    $http.get('/api/slides').success (slides) ->
      $scope.slides = slides