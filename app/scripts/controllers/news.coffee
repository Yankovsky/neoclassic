angular.module('neoclassicApp')
.controller 'NewsCtrl', ($scope, $http) ->
    $scope.news = [
      title: 'Запилили сайтик'
      text: 'ваще в поряде пацаны запилили'
    ,
      title: 'дарт вейдер - президент украины',
      text: 'так то'
    ]