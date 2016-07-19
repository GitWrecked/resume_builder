// resumes routes ===================
// angular routes using ui.router, allows for nested views
angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('resumes', {
                url: '/resumes',
                templateUrl: 'src/app/resumes/resumesTmpl.html',
                admin: true // protected route for admins only
            });
    }
]);