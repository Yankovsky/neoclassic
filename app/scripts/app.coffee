angular.module('neoclassicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.tinymce'
])
.config ($routeProvider, $locationProvider, $httpProvider, $anchorScrollProvider) ->
    $routeProvider
    .when '/',
        templateUrl: 'partials/main',
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/login',
        templateUrl: 'partials/login'
        controller: 'LoginCtrl',
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/settings',
        templateUrl: 'partials/settings'
        controller: 'SettingsCtrl'
        authenticate: true,
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/events',
        templateUrl: 'partials/events',
        controller: 'EventsCtrl'
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/news',
        templateUrl: 'partials/news',
        controller: 'NewsCtrl'
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/news/exhibition',
        templateUrl: 'partials/exhibition',
        controller: 'ExhibitionCtrl'
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/news/:slug',
        templateUrl: 'partials/news-details',
        controller: 'NewsDetailsCtrl'
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/:slug',
        templateUrl: 'partials/page',
        controller: 'PageCtrl',
        reloadOnSearch: false,
        caseInsensitiveMatch: true
#    .when '/guestbook',
#        templateUrl: 'partials/guestbook',
#        reloadOnSearch: false,
#        caseInsensitiveMatch: true
    .otherwise
        redirectTo: '/'

    $locationProvider.html5Mode true

    $httpProvider.interceptors.push ['$q', '$location', ($q, $location) ->
      responseError: (response) ->
        if response.status is 401
          $location.path '/login'
        $q.reject response
    ]

#    $httpProvider.interceptors.push ['$q', '$location', ($q, $location) ->
#      responseError: (response) ->
#        if response.status is 404
#          $location.path '/'
#          $q.reject response
#        else
#          $q.reject response
#    ]

    $anchorScrollProvider.disableAutoScrolling()

.run ($rootScope, $location, Auth, seo) ->
  $rootScope.$on '$routeChangeStart', (event, next) ->
    $location.path '/login' if next.authenticate and not Auth.isLoggedIn() and false
  $rootScope.$on '$routeChangeSuccess', () ->
    seo.set($location.path())