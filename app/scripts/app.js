/*jshint unused: vars */
define([
    'angular',
    'routeManager',
    'controllers',
    'directives/analytics',
    'angular-ui-router'
],
    /*deps*/
    function (angular, RouteManager)/*invoke*/ {
        'use strict';

        return angular.module('ToDoApp', [
                'AnalyticsDirective',
                'controllers',
                /*angJSDeps*/
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ui.router'
            ])
            .config(RouteManager);
    });