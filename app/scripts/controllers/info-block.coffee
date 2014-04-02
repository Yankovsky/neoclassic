angular.module('neoclassicApp')
.controller 'InfoBlockCtrl', ($scope, $http) ->
    $scope.news = [
      title: 'Цифровая выставка живописи в жанре абстракционизма, в рамках проекта NeoClassic'
      urlSlug: 'exhibition',
      createdAt: new Date(2014, 3, 2)
    ]

    $scope.event = {
      title: 'ДОЛГОЖДАННЫЙ КОНЦЕРТ'
      text: 'Внимание! Только один день в Музее современного искусства “Эрарта”
            состоится долгожданное выступление Дмитрия Янковского
            в сопровождении струнного квинтета Corelli. Билеты можно приобрести в кассе Музея...',
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/neoclassic/news/NeoClassic-Afisha-Erarta-(18safsf.jpg',
      datetime: new Date(2014, 3, 2),
      urlSlug: 'erarta'
    }