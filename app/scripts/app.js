/*jshint unused: vars */
define([
    'angular',
    'controllers/main',
    'controllers/homepage',
    'routeManager',
    'angular-ui-router'
  ],
    /*deps*/
    function (angular, MainCtrl, HomepageCtrl, RouteManager)/*invoke*/ {
        'use strict';

        return angular.module('connectApp', [
            'connectApp.controllers.MainCtrl',
            'connectApp.controllers.HomepageCtrl',
            /*angJSDeps*/
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ui.router'
          ])
        .config(RouteManager);
      });