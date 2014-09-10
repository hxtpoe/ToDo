/*jshint unused: vars */
define([
    'angular',
    'controllers/add',
    'controllers/main',
    'controllers/list'
],
    /*deps*/
    function (angular, AddController, MainController, ListController)/*invoke*/ {
        'use strict';

        return angular.module('controllers', [])
            .controller('AddController', AddController)
            .controller('MainController', MainController)
            .controller('ListController', ListController);
    });