define([
    'scripts/task/taskModule',
    'angular',
    'angular-mocks'
],
    function (TaskModule) {
        'use strict';

        var moduleName = TaskModule();

        describe('Controller: TaskController', function () {

            var TaskController;

            beforeEach(
                function () {
                    module(moduleName);
                    inject(function ($controller) {
                        TaskController = $controller("TaskController", {});
                    });
                }
            );

            it('should attach a list of awesomeThings to the scope', function () {
                expect(TaskController.test).toBeTruthy();
            });
        });
    });