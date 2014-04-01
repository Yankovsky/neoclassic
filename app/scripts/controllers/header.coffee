angular.module('neoclassicApp')
.controller 'NavbarCtrl', ($scope, $location, $anchorScroll) ->
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
      link: '/biography'
    ,
      title: 'Гостевая'
      link: '/guestbook'
    ]

    $scope.scrollToContacts = ->
      $location.hash('contact-info')
      $anchorScroll()

    $scope.isActive = (route) ->
      route is $location.path()