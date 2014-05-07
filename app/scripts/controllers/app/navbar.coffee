angular.module('neoclassicApp')
.controller 'NavbarCtrl', ($scope, helpers) ->
    $scope.items = [
      {title: 'О проекте', path: '/about'}
#      {title: 'Афиша', path: '/events'}
      {title: 'Новости', path: '/news'}
      {title: 'Биография', path: '/biography'}
#      {title: 'Гостевая', path: '/guestbook'}
    ]

    $scope.helpers = helpers