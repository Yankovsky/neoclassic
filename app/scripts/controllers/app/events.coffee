angular.module('neoclassicApp')
.controller 'EventsCtrl', ($scope, $http) ->
    day = 24 * 60 * 60 * 1000
    $http.get('/api/entries/events').success (events) ->
      yesterday = Date.now() - day
      $scope.events = _.sortBy(_.filter(events, (event) -> event.datetime > yesterday), 'datetime')