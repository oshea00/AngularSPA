'use strict';

myApp.directive('greeting', function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayGreeting()'>Say Hello</button>",
        controller: function ($scope) {
            $scope.sayGreeting = function () {
                alert('Hello');
            }
        }
    }
});
