angular.module('neoclassicApp')
  .factory 'errorsSvc', () ->
    errors = []
    {
    push: (error) ->
      errors.push(JSON.stringify({message: error.message, stack: error.stack}))
    errors: ->
      errors
    }