'use strict';

myApp.directive('mySample', function ($compile) {
    return {
        restrict: 'E',  // could also be 'C' for class, 'M' for comment, 'A' for attribute
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br />",
        scope: {
        }
    }
});

