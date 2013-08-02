'use strict';

myApp.factory('wordcalc', ['calculator', function (calculator) {
    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return {
        addWord: function (val1, val2) {
            return words[val1] + ' plus ' + words[val2] + ' = ' + calculator.add(val1, val2);
        }
    }
}]);
