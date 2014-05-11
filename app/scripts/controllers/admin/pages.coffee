angular.module('neoclassicApp')
.controller 'AdminPagesCtrl', ($scope, $http, $routeParams, $location) ->
    $http.get('/api/pages')
    .success (pages) ->
      $scope.pages = pages


    creation = true
    $scope.selectedPage = {}

    $scope.newPage = ->
      creation = true
      $scope.selectedPage = {}

    $scope.selectPage = (page) ->
      creation = false
      $scope.selectedPage = page

    $scope.submit = ->
      if (creation)
        $http.post('/api/pages/', $scope.selectedPage)
        .success () ->
          alert('Сохранено, страницу обнови')
        .error () ->
            alert('Ошибка')
            throw JSON.stringify(arguments)
      else
        $http.put('/api/pages/' + $scope.selectedPage.id, $scope.selectedPage)
        .success () ->
            alert('Сохранено, страницу обнови')
        .error () ->
            alert('Ошибка')
            throw JSON.stringify(arguments)

    $scope.delete = (page) ->
      $http.delete('/api/news/' + page.id)
      .success () ->
          alert('Сохранено, страницу обнови')
      .error () ->
          alert('Ошибка')
          throw JSON.stringify(arguments)

    $scope.tinymceOptions =
      plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media table contextmenu directionality",
        "emoticons template paste textcolor"
      ]
      toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
      toolbar2: "print preview media | forecolor backcolor emoticons",
      image_advtab: true
      height: 500