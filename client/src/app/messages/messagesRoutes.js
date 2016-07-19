// messages routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('messages', {
                url: '/messages',
                templateUrl: 'src/app/messages/messagesTmpl.html',
                admin: true
            });
    }
]);