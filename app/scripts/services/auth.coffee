angular.module('neoclassicApp').factory 'Auth', ($location, $rootScope, $http, $cookieStore) ->
  $rootScope.currentUser = $cookieStore.get('user') or null
  $cookieStore.remove 'user'

  login: (user) ->
    $http.post('/api/session', user).success (user) ->
      $rootScope.currentUser = user

  logout: (callback) ->
    $http.delete('/api/session')
    .success ->
      $rootScope.currentUser = null
      callback && callback()
    .error (err) ->
      callback && cb err

  changePassword: (newPassword, callback) ->
    $http.put('/api/changePassword',
      newPassword: newPassword
    )
    .success (user) ->
      callback && cb user
    .error (err) ->
      callback && cb err

  isLoggedIn: ->
    user = $rootScope.currentUser
    !!user