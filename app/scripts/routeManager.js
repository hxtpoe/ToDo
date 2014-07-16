define([], function () {
    'use strict';
    var RouteManager = function ($stateProvider) {
        $stateProvider.
            state('app', {
            url: '',
            views: {
              'appview@': {
                templateUrl: 'views/main.html',
                controller: 'MainController as MainCtrl'
              }
            }
          });
      };

    return ['$stateProvider', RouteManager];
  });