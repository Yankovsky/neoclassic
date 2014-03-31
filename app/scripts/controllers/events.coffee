angular.module('neoclassicApp')
  .controller 'EventsCtrl', ($scope, $http) ->
    $scope.events = [
      {
        text: 'Среда, 2 апреля - Концерт в Эрарте',
        url: '/schedule/erarta'
      }
      {
        text: 'Пятница, 4 апреля - Концерт в Другом месте',
        url: '/schedule/drugoe'
      }
      {
        text: 'Понедельник, 16 апреля - Опять концерт',
        url: '/schedule/drugoe'
      }
      {
        text: 'Суббота, 1 мая - Пыщ пыщ',
        url: '/schedule/drugoe'
      }
    ]