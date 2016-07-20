// actions routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('actions', {
                url: '/actions',
                templateUrl: 'src/app/actions/actionsTmpl.html',
                authenticate: true
            });
    }
]);