describe 'Service: youtubePlayerSvc', () ->

  # load the service's module
  beforeEach module 'neoclassicApp'

  # instantiate service
  youtubePlayerSvc = {}
  beforeEach inject (_youtubePlayerSvc_) ->
    youtubePlayerSvc = _youtubePlayerSvc_

  it 'should do something', () ->
    expect(!!youtubePlayerSvc).toBe true
