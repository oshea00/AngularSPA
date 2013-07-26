'use strict';

var myApp = angular.module('myApp', ['ngResource'])
    .config(function ($routeProvider, $locationProvider) {
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
        $routeProvider.when('/event/:id',
            {
                templateUrl: '/Content/templates/EventDetail.html',
                controller: 'EventDetailController'
            });
        $routeProvider.when('/hello',
            {
                template: '<h3>Hello World</h3>'
            });
        $routeProvider.otherwise({ redirectTo: '/events' });
        $locationProvider.html5Mode(true);
    });
