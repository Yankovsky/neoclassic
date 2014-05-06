angular.module('neoclassicApp')
.controller 'InfoBlockCtrl', ($scope, $http) ->
    $http.get('/api/news').success (news) ->
      $scope.news = news

    $scope.event = {
      title: 'ДОЛГОЖДАННЫЙ КОНЦЕРТ'
      shortText: 'Внимание! Только один день в Музее современного искусства “Эрарта”
            состоится долгожданное выступление Дмитрия Янковского
            в сопровождении струнного квинтета Corelli. Билеты можно приобрести в кассе Музея...',
      thumbnailUrl: 'https://s3-eu-west-1.amazonaws.com/neoclassic/news/NeoClassic-Afisha-Erarta-(18safsf.jpg',
      datetime: new Date(2014, 3, 2),
      slug: 'erarta'
    }