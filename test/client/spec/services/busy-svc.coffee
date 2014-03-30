'use strict'

describe 'Service: busySvc', () ->

  # load the service's module
  beforeEach module 'neoclassicApp'

  # instantiate service
  busySvc = {}
  beforeEach inject (_busySvc_) ->
    busySvc = _busySvc_

  it 'should do something', () ->
    expect(!!busySvc).toBe true
