angular.module('neoclassicApp')
  .factory 'loggingSvc', () ->
    messages = []
    window.onerror = (message, url, lineNumber) ->
      messages.push(JSON.stringify({message: message, url: url, lineNumber: lineNumber}))
    {
    push: (message) ->
      messages.push(message)
    messages: ->
      messages
    }
  .factory '$exceptionHandler', () ->
    (exception, cause) ->
      throw exception