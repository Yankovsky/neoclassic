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
        templateUrl: 'partials/app/main'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/news/exhibition',
        templateUrl: 'partials/app/exhibition'
        controller: 'ExhibitionCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/news',
        templateUrl: 'partials/app/news'
        controller: 'NewsCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/events',
        templateUrl: 'partials/app/events'
        controller: 'EventsCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/:type/:slug',
        templateUrl: 'partials/app/entry'
        controller: 'EntryCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/:slug',
        templateUrl: 'partials/app/entry'
        controller: 'EntryCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
#    .when '/guestbook',
#        templateUrl: 'partials/app/guestbook',
#        reloadOnSearch: false,
#        caseInsensitiveMatch: true
    .otherwise
        redirectTo: '/'

    $locationProvider.html5Mode true

    $anchorScrollProvider.disableAutoScrolling()

.run ($rootScope, $location, seo) ->
  $rootScope.$on '$routeChangeSuccess', () ->
    seo.set($location.path())