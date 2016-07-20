// actions controller ===================
// angular controller to display user actions
angular.module('rbApp')
    .controller('actionsCtrl', [
        '$scope', '$state', 'authSvc', '$log',
        function($scope, $state, authSvc, $log) {
            $scope.currentUser = authSvc.user();
            $scope.$watch(authSvc.user, function() {
                $scope.currentUser = authSvc.user();
            }, true);
            $scope.isAuthenticated = function() {
                return $scope.currentUser;
            };
        }
    ]);