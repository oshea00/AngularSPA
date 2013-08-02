myApp.factory('calculator', function () {
    return {
        add: function(val1,val2) {
            return val1+val2;
        },
        mult: function (val1, val2) {
            return val1 * val2;
        }
    }
});
