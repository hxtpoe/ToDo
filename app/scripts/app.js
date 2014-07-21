/*jshint unused: vars */
define([
    'angular',
    'routeManager',
    'controllers/main',
    'controllers/add',
    'controllers/list',
    'directives/analytics',
    'angular-ui-router'
  ],
    /*deps*/
    function (angular, RouteManager)/*invoke*/ {
        'use strict';

        return angular.module('ToDoApp', [
            'MainCtrl',
            'AddCtrl',
            'ListCtrl',
            'AnalyticsDirective',
            /*angJSDeps*/
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ui.router'
          ])
        .config(RouteManager);
      });