angular.module('rbApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('resumes', {
                url: '/resumes',
                templateUrl: 'src/app/resumes/resumesTmpl.html'
            });
    }
]);