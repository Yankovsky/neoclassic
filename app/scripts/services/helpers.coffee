angular.module('neoclassicApp')
.factory 'helpers', ($location, $anchorScroll) ->
    isLocationPath: (path) ->
      path is $location.path()
    scrollTo: (hash) ->
      $location.hash(hash)
      $anchorScroll()