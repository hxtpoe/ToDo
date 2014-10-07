define([
    'angular',
    'scripts/task/routeManager',
    'scripts/task/task-ctrl',
    'scripts/task/data/fixturesOfTaskList-service',
    'scripts/task/data/taskList-service',
    'angular-animate',
    'angular-ui-router'
],
    function (angular, RouteManager, TaskController, FixturesOfTasksListService, TaskListService) {
        'use strict';

        return function () {
            var name = 'taskModule';

            angular.module(name, [
                    'ui.router',
                    'ngAnimate'
                ])
                .service("FixturesOfTasksList", FixturesOfTasksListService)
                .service("TaskList", TaskListService)
                .controller("TaskController", TaskController)
                .config(RouteManager);

            return name;
        };
    });
