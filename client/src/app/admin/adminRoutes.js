// admin routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'src/app/users/usersTmpl.html',
                admin: true // protected route for admins only
            })
            .state('admin.users', {
                url: '/users',
                templateUrl: 'src/app/users/usersTmpl.html',
                admin: true // protected route for admins only
            })
            .state('admin.resumes', {
                url: '/resumes',
                templateUrl: 'src/app/resumes/resumesTmpl.html',
                admin: true // protected route for admins only
            })
            .state('admin.messages', {
                url: '/messages',
                templateUrl: 'src/app/messages/messagesTmpl.html',
                admin: true // protected route for admins only
            });
    }
]);