angular.module('neoclassicApp')
.controller 'AdminNavbarCtrl', ($scope, helpers) ->
    $scope.items = [
      {title: 'Видео', path: '/admin/videos'}
      {title: 'Слайды', path: '/admin/slides'}
      {title: 'Страницы', path: '/admin/pages'}
      {title: 'События', path: '/admin/events'}
      {title: 'Новости', path: '/admin/news'}
      {title: 'Блог', path: '/admin/posts'}
#      {title: 'SEO', path: '/admin/seo'}
    ]

    $scope.helpers = helpers