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