/*jshint unused: vars */
define([
    'angular',
    'controllers/main',
    'routeManager',
    'angular-ui-router'
  ],
    /*deps*/
    function (angular, MainCtrl, RouteManager)/*invoke*/ {
        'use strict';

        return angular.module('connectApp', [
            'connectApp.controllers.MainCtrl',
            /*angJSDeps*/
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ui.router'
          ])
        .config(RouteManager);
      });