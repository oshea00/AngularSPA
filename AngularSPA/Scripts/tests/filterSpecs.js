/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../filters/firstupper.js" />
/// <reference path="../filters/aspdate2jsdate.js" />
'use strict';

describe('firstupper filter Spec', function () {

    beforeEach(module('myApp'));

    it('should return first letter uppercase', inject(function (firstupperFilter) {
        expect(firstupperFilter('abc')).toEqual('Abc');
    }))

});

describe('aspdate2jsdate filter Spec', function () {

    beforeEach(module('myApp'));

    it('should return valid JS date', inject(function (aspdate2jsdateFilter) {
        expect(aspdate2jsdateFilter('/Date(1337878800000+0700)/').toLocaleDateString())
            .toEqual('Thursday, May 24, 2012');
    }))

});

