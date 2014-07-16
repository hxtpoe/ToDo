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
            }).
            state('homepage', {
                url: '/homepage',
                views: {
                    'appview@': {
                        templateUrl: 'views/homepage.html',
                        controller: 'HomepageController as HomepageCtrl'
                    }
                }
            });
    };

    return ['$stateProvider', RouteManager];
});