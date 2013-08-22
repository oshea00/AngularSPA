/// <reference path="../angular.js" />
/// <reference path="../angular-resource.min.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../_app.js" />
/// <reference path="../sinon-1.7.3.js" />
/// <reference path="../services/wordcalc.js" />
/// <reference path="../services/calculator.js" />
'use strict';

    describe('Complex Service Spec', function () {
        var mockCalculator;

        beforeEach(module('myApp'));

        beforeEach(function () {
            mockCalculator = sinon.stub({ add: function () { } });
            module(function ($provide) {
                $provide.value('calculator', mockCalculator);
            });
        });

        it('should call calculator.add with 1 and 2', inject(function  (wordcalc) {
            wordcalc.addWord(1, 2);
            sinon.assert.calledWith(mockCalculator.add, 1, 2);
        }));


        it('should return one plus two = 3', inject(function (wordcalc) { 
            mockCalculator.add.returns(3);
            var result = wordcalc.addWord(1, 2);
            debugger;
            expect(result).toEqual('one plus two = 3');
        }));

    });

