myApp.directive('eventThumbnail', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<a href="/event/{{event.id}}" class="well thumbnail">' +
                '<div class="row"><h3 class="span6">{{event.name}}</h3></div>' +
                '<div class="row"><span class="span2">' + "{{event.date | date:'MM-dd-yyyy'}}" + '</span></div>' +
                '<div class="row"><span class="span1">{{event.time}}</span></div>' +
                '<div class="row"><span class="span3">{{event.location.address}}</span></div>' +
                '<div class="row"><span class="span3">{{event.location.city}}, {{event.location.province}}</span></div>' +
                '</a>',
        scope: {
            event: "=event"
        }
    }
});