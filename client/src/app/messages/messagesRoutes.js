angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('messages', {
                url: '/messages',
                templateUrl: 'src/app/messages/messagesTmpl.html'
            });
    }
]);