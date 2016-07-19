angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: 'src/app/users/usersTmpl.html'
            });
    }
]);