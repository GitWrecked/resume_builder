// admin controller ===================
// angular controller to handle admin dashboard routing
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('adminCtrl', [
    '$scope', 'authSvc', 'userSvc',
    function($scope, authSvc, userSvc) {
        var currentUser = authSvc.user();
    }
]);