'use strict';

myApp.directive('repeatX', function () {  
    return {
        compile: function (element, attrs) {
            for (var i = 0; i < Number(attrs.repeatX) - 1; i++) {
                element.after(element.clone().attr("repeat-x",0));
            }
        }
    }
});

