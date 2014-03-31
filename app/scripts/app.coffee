angular.module('neoclassicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
.config ($routeProvider, $locationProvider, $httpProvider, $anchorScrollProvider) ->
    $routeProvider
    .when '/',
        templateUrl: 'partials/main',
        reloadOnSearch: false
    .when '/login',
        templateUrl: 'partials/login'
        controller: 'LoginCtrl',
        reloadOnSearch: false
    .when '/settings',
        templateUrl: 'partials/settings'
        controller: 'SettingsCtrl'
        authenticate: true,
        reloadOnSearch: false
    .when '/about',
        templateUrl: 'partials/about',
        reloadOnSearch: false
    .otherwise
        redirectTo: '/'

    $locationProvider.html5Mode true

    # Intercept 401s and redirect you to login
    $httpProvider.interceptors.push ['$q', '$location', ($q, $location) ->
      responseError: (response) ->
        if response.status is 401
          $location.path '/login'
          $q.reject response
        else
          $q.reject response
    ]

    $anchorScrollProvider.disableAutoScrolling()

.run ($rootScope, $location, Auth) ->
  $rootScope.$on '$routeChangeStart', (event, next) ->
    $location.path '/login' if next.authenticate and not Auth.isLoggedIn() and false