angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'src/app/admin/adminTmpl.html'
            })
            .state('admin.users', {
                url: '/users',
                templateUrl: 'src/app/users/usersTmpl.html'
            })
            .state('admin.resumes', {
                url: '/resumes',
                templateUrl: 'src/app/resumes/resumesTmpl.html'
            })
            .state('admin.messages', {
                url: '/messages',
                templateUrl: 'src/app/messages/messagesTmpl.html'
            });
    }
]);