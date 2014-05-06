angular.module('neoclassicApp')
.directive 'newsForm', () ->
    templateUrl: 'partials/news-form'
    restrict: 'E',
    scope: {
      news: '='
      submit: '&'
    },
    controller: ($scope) ->
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