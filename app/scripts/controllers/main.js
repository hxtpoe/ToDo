define(['angular'], function (angular) {
    'use strict';

    angular.module('connectApp.controllers.MainCtrl', [])
        .controller('MainController', function () {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma',
              ];
          });
  });