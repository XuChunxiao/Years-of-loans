define(['app'], function(app) {
    app.directive('header', ['$rootScope', '$location', function($rootScope, $location) {
        return {
            restrict: 'EA',
            replace: true,
            // scope: {
            //     data: '=',
            // },
            templateUrl: './views/head.html',
            link: function(scope, element, attrs) {

            }
        }
    }])
});