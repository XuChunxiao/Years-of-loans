define(['app'], function(app) {
    app.directive('header', ['$rootScope', '$location', function($rootScope, $location) {
        return {
            restrict: 'EA',
            replace: true,
            // scope: {
            //     data: '=',
            // },
            templateUrl: 'head',
            link: function(scope, element, attrs) {

            }
        }
    }])
});