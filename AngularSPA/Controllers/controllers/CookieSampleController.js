'use strict';

myApp.controller('CookieSampleController',
    function CookieSampleController($scope,$cookieStore) {

        $scope.event = { id: 1, name: 'My Event' };

        $scope.saveEventToCookie = function (event) {
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function () {
            var event = $cookieStore.get('event');
            return event;
        };

        $scope.removeEventCookie = function () {
            $cookieStore.remove('event');
        };

});

