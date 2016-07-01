require.config({
    paths:{
        jquery:"../../utils/xdx/components/jquery/jquery",
        angular:"../../utils/angular/angular",
        bootstrap:"../../utils/xdx/components/bootstrap/dist/js/bootstrap",
        app:"./app",
        'angular-route': '../../utils/angular/angular-route'

    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'bootstrap':{
            deps:['jquery']
        }
    },
    deps:['jquery','bootstrap','./bootstart']
})