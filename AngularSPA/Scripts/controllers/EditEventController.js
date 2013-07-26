'use strict';

myApp.controller('EditEventController',
    function EditEventController($scope, restEventData, $timeout) {

        var promise = $timeout(function () {
            $scope.timeoutMessage = " - Do you need help?";
        }, 3000);

        $scope.saveEvent = function (event, newEventForm) {
            //console.log(newEventForm);
            if (newEventForm.$valid) {
                //window.alert('saved');
                restEventData.save(event);
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/Home/Index";
        };

        $scope.cancelTimeout = function () {
            $timeout.cancel(promise);
        };

    }

);