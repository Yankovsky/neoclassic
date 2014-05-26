angular.module('neoclassicApp')
.controller 'AdminEntriesCtrl', ($scope, $http, $routeParams, $location, $filter) ->
    $scope.type = $routeParams.type

    getAll = ->
      $http.get('/api/entries/' + $scope.type)
      .success (entries) ->
          _.each entries, (entry) ->
            entry.simplified = true if ($scope.type == 'events' && !entry.slug && !entry.html)
            if entry.datetime
              entry.datetime = new Date($filter('utc')(entry.datetime))
          $scope.entries = entries
      .error (data, status) ->
          if status is 404
            $location.path '/admin'

    getAll()

    creation = true
    $scope.newEntry = ->
      creation = true
      $scope.selectedEntry = {}
      $scope.selectedEntry.simplified = true if ($scope.type == 'events')

    $scope.newEntry()

    $scope.selectEntry = (entry) ->
      creation = false
      $scope.selectedEntry = entry

    $scope.submit = ->
      entry = _.clone($scope.selectedEntry)
      entry.type = $scope.type
      if (entry.type != 'pages')
        entry.datetime = new Date(entry.datetime.getTime() - new Date().getTimezoneOffset() * 60 * 1000)
      if (entry.type == 'events' && entry.simplified)
        entry.slug = null
        entry.html = null
      if (creation)
        $http.post('/api/entries/' + $scope.type, entry)
        .success () ->
            alert('Сохранено')
            getAll()
            creation = false
        .error () ->
            alert(JSON.stringify(arguments))
      else
        $http.put('/api/entries/' + $scope.type + '/' + entry.id, entry)
        .success () ->
            alert('Сохранено')
            getAll()
        .error () ->
            alert(JSON.stringify(arguments))

    $scope.delete = (entry) ->
      $http.delete('/api/entries/' + $scope.type + '/' + entry.id)
      .success () ->
          alert('Сохранено')
          getAll()
      .error () ->
          alert(JSON.stringify(arguments))

    $scope.copy = (entry) ->
      $scope.selectedEntry = _.omit(_.clone(entry), 'id')

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