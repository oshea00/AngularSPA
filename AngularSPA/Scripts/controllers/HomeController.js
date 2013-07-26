'use strict';

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

        $scope.sortOrder = 'name';
        $scope.query = '';

        $scope.event = restEventData.getEvent();

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

