'use strict'

describe 'Service: loggingSvc', () ->

  # load the service's module
  beforeEach module 'neoclassicApp'

  # instantiate service
  loggingSvc = {}
  beforeEach inject (_loggingSvc_) ->
    loggingSvc = _loggingSvc_

  it 'should do something', () ->
    expect(!!loggingSvc).toBe true
