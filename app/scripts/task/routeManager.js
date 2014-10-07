define([], function () {
    'use strict';
    var RouteManager = function ($stateProvider) {
        $stateProvider
            .state('app', {
                url: '',
                views: {
                    'appview@': {
                        templateUrl: 'scripts/task/task.html',
                        controller: 'TaskController as TaskCtrl'
                    }
                }
            });
    };

    return ['$stateProvider', RouteManager];
});