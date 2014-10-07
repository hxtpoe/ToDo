define([
    'angular',
    'scripts/routeManager',
    'scripts/common/commonModule',
    'scripts/task/taskModule',
    'angular-ui-router',
    'angular-animate',
    'angular-strap',
    'angular-strap-tpl',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource'
],
    function (angular, RouteManager, CommonModule, TaskModule) {
        'use strict';

        return angular.module('YoApp', [
                'ngAnimate',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ui.router',
                'mgcrea.ngStrap.modal',
                CommonModule(),
                TaskModule()
            ])
            .config(RouteManager)
            .config(["$modalProvider", function ($modalProvider) {
                angular.extend($modalProvider.defaults, {
                    html: true
                });
            }]);
    }
)
;