// resumes controller ===================
// angular controller to handle resume management, including routes to call backend api
// front end does not connect to mongo libraries, therefore api routes needed
angular.module('rbApp').controller('resumesCtrl', [
    '$scope', 'resumeSvc', 'authSvc',
    function($scope, resumeSvc, authSvc) {
        var currentUser = authSvc.user();

        getResumes();

        // Delete resume and refresh data
        $scope.deleteResume = function(resume) {
            resumeSvc.deleteResume(resume._id).then(function(response) {
                getResumes();
            });
        };

        function getResumes() {
            resumeSvc.getResumes().then(function(response) {
                $scope.resumes = response.data.resumes;
            });
        }
    }
]);