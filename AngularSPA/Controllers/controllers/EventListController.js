'use strict';

myApp.controller('EventListController',
    function EventListController($scope,restEventData) {
        $scope.events = restEventData.getEvents();
    });
