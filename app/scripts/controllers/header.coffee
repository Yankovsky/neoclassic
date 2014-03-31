angular.module('neoclassicApp')
.controller 'NavbarCtrl', ($scope, $location) ->
    $scope.menu = [
      title: 'О проекте'
      link: '/about'
    ,
      title: 'Афиша'
      link: '/schedule'
    ,
      title: 'Новости'
      link: '/news'
    ,
      title: 'Биография'
      link: '/bio'
    ,
      title: 'Гостевая'
      link: '/guestbook'
    ,
      title: 'Контакты'
      link: '/#contact-info'
    ]

    $scope.isActive = (route) ->
      route is $location.path()