'use strict';

var myApp = angular.module('myApp', ['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: '/Content/templates/NewEvent.html',
                controller: 'EditEventController'
            })
    });