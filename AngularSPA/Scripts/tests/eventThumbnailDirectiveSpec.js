/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../directives/eventThumbnail.js" />

'use strict';

describe('eventThumbnail', function () {
    var el;
    var scope;
    var compile;
    var httpBackend;

    beforeEach(module('myApp'));

    beforeEach(function () {

        var text = " stub ";

    });

    beforeEach(inject(function ($rootScope, $compile) {
        compile = $compile;
        scope = $rootScope.$new();
    }));

    it('should bind the data', function () {
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

        compile(el)(scope);
        scope.$digest();
        expect(el.text()).toContain('Angular Boot Camp');
        expect(el.text).not.toBeUndefined();
    });




});