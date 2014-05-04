angular.module('neoclassicApp')
.controller 'EntryCtrl', ($scope, seo, $http, $routeParams, $sce) ->
    entryType = $routeParams.entryType || 'pages'
    urlSlug = $routeParams.urlSlug

    $scope.entry = {}

    $http.get('/api/' + entryType + '/' + urlSlug).success (entry) ->
      $scope.entry = entry
      seo.set(entry)

    $scope.trustedHtml = ->
      $sce.trustAsHtml($scope.entry.html) if $scope.entry

    $scope.update = ->
      $http.put('/api/' + entryType + '/' + urlSlug, $scope.entry)
      .success () ->
        alert('Сохранено')
      .error () ->
        alert('Ошибка')
        throw JSON.stringify(arguments)

    $scope.tinymceOptions =
      plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons template paste textcolor"
      ]
      toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
      toolbar2: "print preview media | forecolor backcolor emoticons",
      image_advtab: true
      height: 500