﻿myApp.directive('eventThumbnail', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/Content/templates/directives/EventThumbnail.html',
        scope: {
            event: "=event"
        }
    }
});