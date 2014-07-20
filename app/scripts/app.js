/*jshint unused: vars */
define([
    'angular',
    'routeManager',
    'controllers/main',
    'controllers/add',
    'angular-ui-router'
  ],
    /*deps*/
    function (angular, RouteManager)/*invoke*/ {
        'use strict';

        return angular.module('ToDoApp', [
            'MainCtrl',
            'AddCtrl',
            /*angJSDeps*/
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ui.router'
          ])
        .config(RouteManager);
      });