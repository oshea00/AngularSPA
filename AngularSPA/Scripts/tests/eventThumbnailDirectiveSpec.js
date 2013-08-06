/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../directives/eventThumbnail.js" />

'use strict';

describe('eventThumbnail directive Spec', function () {
    var el;
    var scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
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
        //console.log(el[0].outerHTML);
    }));

    it('should bind the data', function () {
        expect(el.text()).toContain('Angular Boot Camp');
    });

});