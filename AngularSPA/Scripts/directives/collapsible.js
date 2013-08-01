'use strict';

myApp.directive('collapsible', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: "<div><h4 class='well-title'>{{name | firstupper}}</h4><div ng-transclude></div></div>",
        scope: {
            name: '@'
        }
    }
});