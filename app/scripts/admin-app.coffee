angular.module('neoclassicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.tinymce'
])
.config ($routeProvider, $locationProvider, $httpProvider) ->
    $routeProvider
    .when '/admin',
        templateUrl: 'partials/admin/main'
        controller: ''
    .when '/admin/login',
        templateUrl: 'partials/admin/login'
        controller: 'LoginFormCtrl'
    .when '/admin/settings',
        templateUrl: 'partials/admin/settings'
        controller: 'SettingsCtrl'
    .when '/admin/videos',
        templateUrl: 'partials/admin/videos'
        controller: 'VideosCtrl'
    .when '/admin/slides',
        templateUrl: 'partials/admin/slides'
        controller: 'SlidesCtrl'
    .when '/admin/pages',
        templateUrl: 'partials/admin/pages'
        controller: 'AdminPagesCtrl'
    .when '/admin/events',
        templateUrl: 'partials/admin/events'
        controller: 'AdminEventsCtrl'
    .when '/admin/news',
        templateUrl: 'partials/admin/news'
        controller: 'AdminNewsCtrl'
    .when '/admin/seo',
        templateUrl: 'partials/admin/seo'
        controller: 'AdminSeoCtrl'
    .otherwise
        redirectTo: '/admin'

    $locationProvider.html5Mode true

    $httpProvider.interceptors.push ['$q', '$location', ($q, $location) ->
      responseError: (response) ->
        if response.status is 401
          $location.path '/admin/login'
        $q.reject response
    ]

#    busy indicator
#    $httpProvider.interceptors.push ['$q', '$location', ($q, $location) ->
#      responseError: (response) ->
#        if response.status is 404
#          $location.path '/'
#          $q.reject response
#        else
#          $q.reject response
#    ]

.run ($rootScope, $location, Auth) ->
    $rootScope.$on '$routeChangeStart', ->
      $location.path '/admin/login' if not Auth.isLoggedIn()