'use strict';

myApp.controller('MainMenuController',
    function MainMenuController($scope, $location, $log) {
        $scope.createEvent = function () {
            $log.log('absUrl: ', $location.absUrl());
            $log.log('protocol: ', $location.protocol());
            $log.log('port: ', $location.port());
            $log.log('host: ', $location.host());
            $log.log('path: ', $location.path());
            $log.log('hash: ', $location.hash());
            $log.log('url: ', $location.url());

            $location.replace(); // clear history
            $location.url('/newEvent');
        };
    });