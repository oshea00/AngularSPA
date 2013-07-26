'use strict';

var myApp = angular.module('myApp', ['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: '/Content/templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/listEvents',
            {
                templateUrl: '/Content/templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/',
            {
                templateUrl: '/Content/templates/EventDetail.html',
                controller: 'HomeController'
            });
    });