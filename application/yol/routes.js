define(['app','templates'], function(app) {
    return app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/housefund', {
                templateUrl: 'housefund',
                controller: 'housefundCtrl'
            });

            $routeProvider.otherwise({
                redirectTo: '/housefund'
            });
        }
    ]);
});