'use strict';

// Earlier example that returned some example data
myApp.factory('eventData', function () {
    return {
        event: {
            name: "Angular Boot Camp",
            date: new Date(),
            time: '10:30 am',
            rating: 3.2,
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/Content/images/russell_logo.gif',
            sessions: [
                {
                    name: 'Directives Masterclass Beginner',
                    creatorName: "Mike O'Shea",
                    duration: '1 hour',
                    level: 'advanced',
                    abstract: 'This is a sample description for the session abstract',
                    upVoteCount: 10
                },
                {
                    name: 'scopes for fun and profit',
                    level: 'beginner',
                    upVoteCount: 0
                },
                {
                    name: 'well-behaved Controllers',
                    level: 'advanced',
                    upVoteCount: 0
                }
            ]
        }
    };
});

// Example: Using this now to get example data from controller
myApp.factory('getEventData', function ($http,$q) {
    return {
        getEvent: function () {
            var deferred = $q.defer();
            $http({method: 'POST', url: '/Home/getevent/1'})
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    $log.log(data, status, headers, config);
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    };
});

// Example: Using this now to get example data from controller - via $resource service
myApp.factory('restEventData', function ($resource,$q) {
    var resource = $resource('/api/Event/:id', { id: '@id' });
    return {
        getEvent: function () {
            var deferred = $q.defer();
                resource.get({ id: 1 },
                function (event) {
                    deferred.resolve(event);
                },
                function (response) {
                    $log.log(data, status, headers, config);
                    deferred.reject(status);
                });
            return deferred.promise;
        },
        save: function (event) {
            var deferred = $q.defer();
            event.id = 999;
            resource.save(event,
                function (response) { deferred.resolve(response); },
                function (response) { deferred.reject(response); }
            );
            return deferred.promise;
        },
        getEvents: function () {
            var deferred = $q.defer();
            resource.query(
                function (response) { deferred.resolve(response); },
                function (response) { deferred.reject(response); }
                );
            return deferred.promise;
        }
    };
});


