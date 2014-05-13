angular.module('neoclassicApp')
.controller 'AdminEntriesCtrl', ($scope, $http, $routeParams, $location) ->
    $scope.type = $routeParams.type

    $http.get('/api/entries/' + $scope.type)
    .success (entries) ->
        $scope.entries = entries
    .error (data, status) ->
        if status is 404
          $location.path '/admin'

    creation = true
    $scope.selectedEntry = {}

    $scope.newEntry = ->
      creation = true
      $scope.selectedEntry = {}

    $scope.selectEntry = (entry) ->
      creation = false
      $scope.selectedEntry = entry

    $scope.submit = ->
      $scope.selectedEntry.type = $scope.type
      if (creation)
        $http.post('/api/entries/' + $scope.type, $scope.selectedEntry)
        .success () ->
            alert('Сохранено, страницу обнови')
        .error () ->
            alert('Ошибка')
            throw JSON.stringify(arguments)
      else
        $http.put('/api/entries/' + $scope.type + '/' + $scope.selectedEntry.id, $scope.selectedEntry)
        .success () ->
            alert('Сохранено, страницу обнови')
        .error () ->
            alert('Ошибка')
            throw JSON.stringify(arguments)

    $scope.delete = (entry) ->
      $http.delete('/api/entries/' + $scope.type + '/' + entry.id)
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