angular.module('neoclassicApp')
  .controller 'SlidesCtrl', ($scope, $http, navSvc) ->
    $http.get('/api/slides').success (slides) ->
      $scope.slides = slides

    $scope.getSlideStyle = (slide) ->
      backgroundImage = if slide.slideType == 'white' then slide.imageUrl else '../images/logo-big.jpg'
      'background-image': "url(\"#{backgroundImage}\")"

    $scope.navigateToVideos = navSvc.navigateToHomePageAndScrollToVideos
