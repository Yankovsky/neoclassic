describe 'Controller: VideosBlockCtrl', () ->
  beforeEach module 'neoclassicApp'
  VideosBlockCtrl = {}
  scope = {}
  $httpBackend = {}
  beforeEach inject (_$httpBackend_, $controller, $rootScope) ->
    $httpBackend = _$httpBackend_
    $httpBackend.expectGET('/api/videos').respond [1, 2, 3, 4, 5, 6, 7, 8, 9]
    scope = $rootScope.$new()
    VideosBlockCtrl = $controller 'VideosBlockCtrl', {
      $scope: scope
    }

  it 'should load list of videos and group them by 4', () ->
    expect(scope.videosGroupedByFour).toBeUndefined()
    $httpBackend.flush()
    expect(scope.videosGroupedByFour).toEqual { 0: [1, 2, 3, 4], 1: [5, 6, 7, 8], 2: [9]}