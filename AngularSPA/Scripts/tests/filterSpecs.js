/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../filters/firstupper.js" />
'use strict';

describe('firstupper filter Spec', function () {

    beforeEach(module('myApp'));

    it('should return first letter uppercase', inject(function (firstupperFilter) {
        expect(firstupperFilter('abc')).toEqual('Abc');
    }))

});

