myApp.directive('datePicker', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            element.datepicker();
        }
    }
})