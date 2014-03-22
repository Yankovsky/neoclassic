'use strict'

angular.module('neoclassicApp')
.factory 'Session', ($resource) ->
    $resource '/api/session/'
