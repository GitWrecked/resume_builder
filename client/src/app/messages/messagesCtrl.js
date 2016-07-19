// messages controller ===================
// angular controller to handle message management, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('messagesCtrl', [
    '$scope', 'messageSvc', 'authSvc',
    function($scope, messageSvc, authSvc) {
        var currentUser = authSvc.user();

        getMessages();

        // Delete message and refresh data
        $scope.deleteMessage = function(message) {
            messageSvc.deleteMessage(message._id).then(function(response) {
                getMessages();
            });
        };

        function getMessages() {
            messageSvc.getMessages().then(function(response) {
                $scope.messages = response.data.messages;
            });
        }
    }
]);