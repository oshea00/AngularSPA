/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../directives/eventThumbnail.js" />

'use strict';

describe('eventThumbnail', function () {
    var el;

    beforeEach(module('myApp'));
    beforeEach(module('Content/templates/directives/EventThumbnail.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope;
        scope.event = {
            name: "Angular Boot Camp",
            date: new Date(),
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            }
        }

        el = angular.element('<event-thumbnail event="event" />');
        $compile(el)(scope);
        scope.$digest();

    }));

    it('should bind the data', function () {
        expect(el.text()).toContain('Event Name');
    });
});