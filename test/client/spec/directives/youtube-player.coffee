describe 'Directive: youtubePlayer', () ->
  beforeEach module 'neoclassicApp'
  scope = {}
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should load youtube api script', inject ($compile) ->
    element = angular.element '<youtube-player></youtube-player>'
    element = $compile(element) scope
    expect($('script[src="https://www.youtube.com/player_api"]').length).toBe 1
