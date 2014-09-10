define(['angular'], function (angular) {
    'use strict';

    angular.module('AnalyticsDirective', [])
        .directive('analytics', [ "$window", "$location", function ($window, $location) {
            return {
                restrict: 'E',
                link: function ($scope) {
                    $scope.$on('$stateChangeStart',
                        function () {
                            $window.ga('set', 'page', $location.path());
                            $window.ga('send', 'pageview');
                        });
                }
            };
        }]);
});