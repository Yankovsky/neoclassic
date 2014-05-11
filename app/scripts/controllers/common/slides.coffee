angular.module('neoclassicApp')
  .controller 'SlidesCtrl', ($scope, $http) ->
    $http.get('/api/slides').success (slides) ->
      $scope.slides = slides