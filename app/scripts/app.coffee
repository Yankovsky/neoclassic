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
        templateUrl: 'partials/main'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/events/erarta',
        templateUrl: 'partials/erarta'
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/events',
        templateUrl: 'partials/events'
        controller: 'EventsCtrl'
        reloadOnSearch: false,
        caseInsensitiveMatch: true
    .when '/news',
        templateUrl: 'partials/news'
        controller: 'NewsCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/news/exhibition',
        templateUrl: 'partials/exhibition'
        controller: 'ExhibitionCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/news/:slug',
        templateUrl: 'partials/news-details'
        controller: 'NewsDetailsCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
    .when '/:slug',
        templateUrl: 'partials/page'
        controller: 'PageCtrl'
        reloadOnSearch: false
        caseInsensitiveMatch: true
#    .when '/guestbook',
#        templateUrl: 'partials/guestbook',
#        reloadOnSearch: false,
#        caseInsensitiveMatch: true
    .otherwise
        redirectTo: '/'

    $locationProvider.html5Mode true

    $anchorScrollProvider.disableAutoScrolling()

.run ($rootScope, $location, seo) ->
  $rootScope.$on '$routeChangeSuccess', () ->
    seo.set($location.path())