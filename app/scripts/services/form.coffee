angular.module('neoclassicApp').factory 'form', () ->
  (form) ->
    setServerErrors: (errors) ->
      _.each errors, (message, prop) ->
        form[prop].$setValidity('server', false)