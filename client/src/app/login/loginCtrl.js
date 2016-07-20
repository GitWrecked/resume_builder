// login controller ===================
// angular controller to handle user login, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('loginCtrl', [
    '$scope', '$state', 'authSvc', '$log',
    function($scope, $state, authSvc, $log) {
        $scope.loggingin = false;
        $scope.loggedin = false;
        $scope.login = function() {
            $scope.loggingin = true;
            $log.debug('loginCtrl: authSvc.login: ' + JSON.stringify($scope.user));
            setTimeout(function() {
                authSvc.login($scope.user).then(function(res) { // make service call to node api routes as front doesn't have support for mongoose/mongo
                    $log.debug('loginCtrl: authSvc.login response: ' + JSON.stringify(res.data));
                    $scope.message = res.data.msg;
                    if (res.data.success) {
                        $scope.loggedin = true;
                        $state.transitionTo('actions');
                    }
                    $scope.loggingin = false;
                });
            }, 2000);
        };
    }
]);