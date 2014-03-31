angular.module('neoclassicApp')
.controller 'LatestInfoCtrl', ($scope, $http) ->
    $scope.news = [
      title: 'Запилили сайтик'
      text: 'ваще в поряде пацаны запилили',
      url: 'http://www.youtube.com/watch?v=Yf1wpCeOms0'
    ]

    $scope.event = {
      title: 'ДОЛГОЖДАННЫЙ КОНЦЕРТ'
      text: '
            Внимание! Только один день в Музее современного искусства “Эрарта”
            состоится долгожданное выступление Дмитрия Янковского
            в сопровождении струнного квинтета Corelli. Билеты можно приобрести в кассе Музея...',
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/neoclassic/news/NeoClassic-Afisha-Erarta-(18safsf.jpg'
    }