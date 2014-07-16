define(['angular'], function (angular) {
  'use strict';

  angular.module('connectApp.controllers.HomepageCtrl', [])
    .controller('HomepageCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
