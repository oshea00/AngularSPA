'use strict';

myApp.filter('firstupper', function () {
    return function (input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
});

