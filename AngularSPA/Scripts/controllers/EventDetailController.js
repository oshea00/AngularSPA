'use strict';

myApp.controller('EventDetailController',
    function EventDetailController($scope, restEventData, $log, $anchorScroll, $routeParams) {

        $scope.sortOrder = 'name';
        $scope.query = '';

        $scope.event = restEventData.getEvent($routeParams.id);

        // show the returned promise from getEvent
        $scope.event.then(
            function (event) { $log.log(event); },
            function (response) { $log.log(response); }
            );

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        }
    });

