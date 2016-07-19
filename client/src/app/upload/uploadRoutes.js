// upload routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('upload', {
                url: '/upload',
                templateUrl: 'src/app/upload/uploadTmpl.html',
                authenticate: true
            });
    }
]);