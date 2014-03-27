'use strict'

describe 'Service: errorsSvc', () ->

  # load the service's module
  beforeEach module 'neoclassicApp'

  # instantiate service
  errorsSvc = {}
  beforeEach inject (_errorsSvc_) ->
    errorsSvc = _errorsSvc_

  it 'should do something', () ->
    expect(!!errorsSvc).toBe true
