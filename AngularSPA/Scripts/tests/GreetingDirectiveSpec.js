/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../directives/greeting.js" />

'use strict';

describe('greeting directive Spec', function () {
    var el;
    var scope;
    var httpBackend;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        el = angular.element('<greeting finnish hindi></greeting>');
        $compile(el)(scope);
        scope.$digest();
        //console.log(el[0].outerHTML);
    }));

    it('should show a Say Hello button', function () {
        expect(el.text()).toContain('Say Hello');
        expect(el.text).not.toBeUndefined();
    });

});