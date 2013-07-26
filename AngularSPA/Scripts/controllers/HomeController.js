﻿'use strict';

myApp.filter('firstupper', function () {
    return function (input) {
        var firstLetter = input.substring(0, 1).toUpperCase();
        return firstLetter + input.substring(1, input.length);
    }
});

myApp.filter('aspdate2jsdate', function () {
    return function (input) {
        if (input) {
            var jsDate = new Date(parseInt(input.substr(6)));
            return jsDate;
        }
        return "";
    }
});


myApp.controller('HomeController',
    function HomeController($scope, restEventData, $log, $anchorScroll) {

        $scope.name = "Mike";

    });

