﻿myApp.directive('upvote', function () {
    return {
        restrict: 'E',
        template: '<div class="span0 well" style="width: 15px;">' +
            '    <div class="votingButton" ng-click="upvote()" style="width: 0px; margin: 0 auto;">' +
            '        <i class="icon-chevron-up icon-white"></i>' +
            '    </div>' +
            '    <div class="badge badge-inverse">' +
            '        <div>{{count}}</div>' +
            '    </div>' +
            '    <div class="votingButton" ng-click="downvote()" style="width: 0px; margin: 0 auto;">' +
            '        <i class="icon-chevron-down icon-white"></i>' +
            '    </div>' +
            '</div>',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});