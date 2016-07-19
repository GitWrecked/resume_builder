// register controller ===================
// angular controller to handle user registration, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('registerCtrl', [
    '$scope', '$state', 'authSvc', '$log',
    function($scope, $state, authSvc, $log) {
        $scope.registering = false;
        $scope.registered = false;
        $scope.register = function() {
            $scope.registering = true;
            $log.debug('registerCtrl: authSvc.register: ' + JSON.stringify($scope.user));
            setTimeout(function() { // pausing execution to show loading bar, remove when moving to prod
                authSvc.register($scope.user).then(function(res) { // make service call to node api routes as front doesn't have support for mongoose/mongo
                    $log.debug('registerCtrl: authSvc.register response: ' + JSON.stringify(res.data));
                    $scope.message = res.data.msg;
                    if (res.data.success) {
                        $scope.registered = true;
                        $state.transitionTo('actions');
                    }
                    $scope.registering = false;
                });
            }, 2000);
        };
    }
]);