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
                controller: 'EventDetailController',
                resolve: {
                    event: function ($q, $route, restEventData) {
                        var deferred = $q.defer();
                        restEventData.getEvent($route.current.pathParams.id)
                            .then(function (event) { deferred.resolve(event); });
                        return deferred.promise;
                    }
                }
            });
        $routeProvider.when('/hello',
            {
                template: '<h3>Hello World</h3>'
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: '/Content/templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });
        $routeProvider.otherwise({ redirectTo: '/listEvents' });
        $locationProvider.html5Mode(true);
    });
