'use strict';

// Example of observing a value on the model

myApp.directive('mytag', function (restEventData) {  // note you can inject services
    return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function (scope, element, ettrs, conrtoller) {
            $attrs.$observe('email', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    attrs.$set('src', "somenew value");
                }
            });
        }
    }
});