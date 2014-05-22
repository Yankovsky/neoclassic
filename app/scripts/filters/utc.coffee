angular.module('neoclassicApp').filter 'utc', () ->
  (datetime) -> datetime + new Date().getTimezoneOffset() * 60 * 1000