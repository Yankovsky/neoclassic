describe 'Directive: youtubePlayer', () ->

  # load the directive's module
  beforeEach module 'neoclassicApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<youtube-player></youtube-player>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the youtubePlayer directive'
