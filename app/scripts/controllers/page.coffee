angular.module('neoclassicApp')
  .controller 'PageCtrl', ($scope, $http, $routeParams) ->
    $scope.pageName = $routeParams.pageName
    $http.get('/api/pages/' + $scope.pageName).success (page) ->
      page.topImageUrl = page.topImageUrl || 'https://s3-eu-west-1.amazonaws.com/neoclassic/logo-big.jpg'
      page.rightImageUrl = page.rightImageUrl || 'https://s3-eu-west-1.amazonaws.com/neoclassic/slides/slide1.jpg'
      $scope.page = page

    $scope.update = ->
      $http.put('/api/pages/' + $scope.pageName,
        text: $scope.page.text,
        topImageUrl: $scope.page.topImageUrl,
        rightImageUrl: $scope.page.rightImageUrl,
      ).success () ->
        console.log('DONE')