angular.module('neoclassicApp').factory 'Auth', ($location, $rootScope, $http, $cookieStore) ->
  $rootScope.currentUser = $cookieStore.get('user') or null
  $cookieStore.remove 'user'

  login: (user, callback) ->
    $http.post('/api/session',
      email: user.email
      password: user.password
    ,(user) ->
      $rootScope.currentUser = user
      callback && callback()
    ,(err) ->
      callback && callback err
    )

  logout: (callback) ->
    $http.delete('/api/session',->
      $rootScope.currentUser = null
      callback && callback()
    ,(err) ->
      callback && cb err
    )

  changePassword: (newPassword, callback) ->
    $http.put('/api/changePassword',
      newPassword: newPassword
    ,(user) ->
      callback && cb user
    ,(err) ->
      callback && cb err
    )

  isLoggedIn: ->
    user = $rootScope.currentUser
    !!user