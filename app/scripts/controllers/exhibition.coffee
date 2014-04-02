angular.module('neoclassicApp')
.controller 'ExhibitionCtrl', ($scope) ->
  pad = (num, size) ->
    s = "000000000" + num
    return s.substr(s.length - size)
  path = 'https://s3-eu-west-1.amazonaws.com/neoclassic/news/'
  slides = []
  for i in [2..11] by 1
    slides.push({
      imageUrl: path + pad(i, 2) + '.jpg'
    })
  $scope.slides = slides