describe 'Controller: SliderCtrl', () ->
  beforeEach module 'neoclassicApp'
  SliderCtrl = {}
  scope = {}
  $httpBackend = {}
  beforeEach inject (_$httpBackend_, $controller, $rootScope) ->
    $httpBackend = _$httpBackend_
    $httpBackend.expectGET('/api/slides').respond [1, 2]
    scope = $rootScope.$new()
    SliderCtrl = $controller 'SliderCtrl', {
      $scope: scope
    }

  it 'should attach a list of slides to the scope', () ->
    expect(scope.slides).toBeUndefined()
    $httpBackend.flush()
    expect(scope.slides).toEqual [1, 2]