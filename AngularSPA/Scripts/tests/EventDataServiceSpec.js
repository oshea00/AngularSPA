/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../services/EventData.js" />

'use strict';

describe('EventDataServiceSpec', function () {

    beforeEach(module('myApp'));

    describe('getEvent', function () {

        it('should issue a GET request to /api/event/1 when id is 1', inject(function (restEventData, $httpBackend) {
            $httpBackend.when('GET', '/api/Event/1').respond({ id: 1 });
            var eventpromise = restEventData.getEvent(1);
            $httpBackend.flush();
            expect(eventpromise.then).toBeDefined();
        }))
    })

});