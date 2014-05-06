angular.module('neoclassicApp').filter 'unsafe', ($sce) ->
  (html) -> $sce.trustAsHtml(html);