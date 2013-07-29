'use strict';

myApp.controller('EventDetailController',
    function EventDetailController($scope, restEventData, $anchorScroll, $route) {

        $scope.sortOrder = 'name';
        $scope.query = '';

        $scope.event = $route.current.locals.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        };

        $scope.reload = function () {
            $route.reload();
        };

    });

