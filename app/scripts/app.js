/*jshint unused: vars */
define([
    'angular',
    'controllers/main',
    'routeManager',
<<<<<<< HEAD
    'angular-ui-router']/*deps*/, function (angular, MainCtrl, RouteManager)/*invoke*/ {
    'use strict';

    console.log("scripts");

    return angular.module('connectApp', [
=======
    'angular-ui-router'
  ],
    /*deps*/
    function (angular, MainCtrl, RouteManager)/*invoke*/ {
        'use strict';

        return angular.module('connectApp', [
>>>>>>> angular-ui-route
            'connectApp.controllers.MainCtrl',
            /*angJSDeps*/
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ui.router'
<<<<<<< HEAD
        ])
        .config(RouteManager);
});
=======
          ])
        .config(RouteManager);
      });
>>>>>>> angular-ui-route
