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
            state('add', {
                url: '/add',
                views: {
                    'appview@': {
                        templateUrl: 'views/add.html',
                        controller: 'AddController as AddCtrl'
                    }
                }
            }).
            state('list', {
                url: '/list/:status',
                views: {
                    'appview@': {
                        templateUrl: 'views/list.html',
                        controller: 'ListController as ListCtrl'
                    }
                }
            });
    };

    return ['$stateProvider', RouteManager];
});