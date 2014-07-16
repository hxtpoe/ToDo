/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function (angular, mocks, app) {
    'use strict';

    describe('Controller: MainCtrl', function () {

        // load the controller's module
        beforeEach(module('connectApp.controllers.MainCtrl'));

        var MainCtrl;

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller) {
            MainCtrl = $controller('MainController', {
            });
        }));

        it('should attach a list of awesomeThings to the scope', function () {
            expect(MainCtrl.awesomeThings.length).toBe(3);
        });
    });
});
