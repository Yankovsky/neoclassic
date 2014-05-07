angular.module('neoclassicApp')
.controller 'AdminNavbarCtrl', ($scope, helpers) ->
    $scope.items = [
      {title: 'Видео', path: '/admin/videos'}
      {title: 'Страницы', path: '/admin/pages'}
      {title: 'События', path: '/admin/events'}
      {title: 'Новости', path: '/admin/news'}
      {title: 'SEO', path: '/admin/seo'}
    ]

    $scope.helpers = helpers