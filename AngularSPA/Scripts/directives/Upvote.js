/// <reference path="../../Content/templates/directives/Upvote.html" />
myApp.directive('upvote', function () {
    return {
        restrict: 'E',
        templateUrl: '/Content/templates/directives/Upvote.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});