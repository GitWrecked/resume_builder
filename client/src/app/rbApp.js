// resumebuilder app ===================
// main app module with list of dependencies
// when adding new controllers/services, 
// add names here, and include in index.html imports 
angular.module('rbApp', [
        'ngRoute',
        'ui.router',
        'ngCookies',
        'ngMaterial',
        'ngMessages',
        'ngSanitize'
    ])
    .config(function($mdThemingProvider, $logProvider) { // initialize javascript libraries here if needed
        new WOW().init();
        $mdThemingProvider.theme('rb-default')
            .primaryPalette('grey')
            .accentPalette('light-blue');
        $logProvider.debugEnabled(false); // set to false when deploying to prod 
    })
    .run(function($rootScope, $state, authSvc) {
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
            if (toState.authenticate && !authSvc.isAuthenticated()) { // check if user logged in
                $state.transitionTo("login"); // route user to login
                event.preventDefault(); // prevent default routing behaviour
            }
            if (toState.admin && !authSvc.isAdmin()) { // check if user is admin
                $state.transitionTo("login"); // route user to login
                event.preventDefault(); // prevent default routing behaviour
            }
        });
    });