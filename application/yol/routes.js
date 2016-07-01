define(['app'], function(app) {
    return app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/housefund', {
                templateUrl: './views/housefund.html',
                controller: 'housefundCtrl'
            });

            $routeProvider.otherwise({
                redirectTo: '/housefund'
            });
        }
    ]);
});