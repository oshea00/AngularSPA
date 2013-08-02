/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../services/calculator.js" />
'use strict';

describe('Simple Service Spec', function () {

    beforeEach(module('myApp'));

    it('tests add', inject(function (calculator) {
        expect(calculator.add(1, 2)).toBe(3);
    }));

    it('tests mult', inject(function (calculator) {
        expect(calculator.mult(1, 2)).toBe(2);
    }));

});


