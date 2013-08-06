'use strict';

myApp.filter('aspdate2jsdate', function () {
    return function (input) {
        if (input) {
            var jsDate = new Date(parseInt(input.substr(6)));
            return jsDate;
        }
        return "";
    }
});

