angular.module('neoclassicApp')
  .controller 'LastNewsCtrl', ($scope, $http) ->
    $scope.news = {
      title: 'ДОЛГОЖДАННЫЙ КОНЦЕРТ'
      text: '
      Внимание! Только один день в Музее современного искусства “Эрарта”
      состоится долгожданное выступление Дмитрия Янковского
      в сопровождении струнного квинтета Corelli. Билеты можно приобрести в кассе Музея...',
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/neoclassic/news/NeoClassic-Afisha-Erarta-(18safsf.jpg'
    }