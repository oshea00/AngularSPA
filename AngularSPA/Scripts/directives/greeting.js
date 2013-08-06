'use strict';

myApp.directive('greeting', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: "<button class='btn' ng-click='sayGreeting()'>Say Hello</button>",
        controller: function ($scope) {
            var greetings = ['hello'];
            $scope.greeting = greetings.join();
            $scope.sayGreeting = function () {
                alert(greetings.join());
            };
            this.addGreeting = function (greeting) {
                greetings.push(greeting);
                $scope.greeting = greetings.join();
            }

        }
    }
})
.directive('finnish', function () {
    return {
        restrict: 'A',
        require: '^greeting',
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('hei');
        }
    }
})
.directive('hindi', function () {
    return {
        restrict: 'A',
        require: '^greeting',
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('नमस्ते');
    }
}
});


