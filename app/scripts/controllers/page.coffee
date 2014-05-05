angular.module('neoclassicApp')
.controller 'PageCtrl', ($scope, seo, $http, $routeParams, $sce) ->
    slug = $routeParams.slug

    $scope.page = {}

    $http.get('/api/pages/' + slug).success (page) ->
      $scope.page = page
      seo.set(page)

    $scope.trustedHtml = ->
      $sce.trustAsHtml($scope.page.html) if $scope.page

    $scope.update = ->
      $http.put('/api/pages/' + $scope.page.id, $scope.page)
      .success () ->
        alert('Сохранено')
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