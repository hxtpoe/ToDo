define(['angular'], function (angular) {
    'use strict';

    angular.module('MainCtrl', [])
        .controller('MainController', function () {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma',
              ];
          });
  });