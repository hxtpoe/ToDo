define(['angular'], function (angular) {
    'use strict';

    angular.module('ListCtrl', [])
        .controller('ListController', function () {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma',
              ];
          });
  });