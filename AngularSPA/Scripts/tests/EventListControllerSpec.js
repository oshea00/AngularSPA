/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../controllers/EventListController.js" />
/// <reference path="../sinon-1.7.3.js" />
'use strict';

describe('EventListController', function () {
    var scope;
    var $controllerConstructor;
    var mockRestEventData;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mockRestEventData = sinon.stub({ getEvents: function () { }});
        $controllerConstructor = $controller;
    }));

    it('should set the scope events to the result of restEventData.getAllEvents', function () {
        var mockEvents = {};

        mockRestEventData.getEvents.returns(mockEvents);

        var ctrl = $controllerConstructor('EventListController',
            { $scope: scope, restEventData: mockRestEventData });


        expect(scope.events).toBe(mockEvents);

    });

});


