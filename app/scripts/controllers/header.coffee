angular.module('neoclassicApp')
.controller 'NavbarCtrl', ($scope, $location) ->
    $scope.menu = [
      title: 'О проекте'
      link: '/about'
    ,
      title: 'Афиша'
      link: '/schedule'
    ,
      title: 'Контакты'
      link: '/contacts'
    ]

    $scope.isActive = (route) ->
      route is $location.path()