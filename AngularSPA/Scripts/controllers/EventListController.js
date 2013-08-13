'use strict';

myApp.controller('EventListController',
    function EventListController($scope,restEventData) {
        $scope.events = restEventData.getEvents();

        $scope.foo = function (var1, var2) {
            return var1 + var2;
        };
    });
