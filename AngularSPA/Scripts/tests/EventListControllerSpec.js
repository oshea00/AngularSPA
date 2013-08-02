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


