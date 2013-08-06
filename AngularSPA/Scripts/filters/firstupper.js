'use strict';

myApp.filter('firstupper', function () {
    return function (input) {
        var firstLetter = input.substring(0, 1).toUpperCase();
        return firstLetter + input.substring(1, input.length);
    }
});

