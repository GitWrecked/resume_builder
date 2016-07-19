// auth service ===================
// angular service to handle user login/register/logout, 
// ideally this service should make api calls to user api, and return results to controller
angular.module('rbApp').factory('authSvc', [
    '$http', '$cookies', '$log',
    function($http, $cookies, $log) {
        var currentUser = {};
        return {
            // make post call to create new user, need associated route in node/express routes
            login: function(user) {
                var promise = $http.post('/api/auth/login', user).then( // make http request to node api
                    function(res) {
                        var user = {
                            email: res.data.email,
                            admin: res.data.admin,
                            token: res.data.token,
                            password: res.data.password
                        };
                        currentUser = user;
                        $cookies.put('currentUser', JSON.stringify(user));
                        return res;
                    });
                return promise;
            },
            // make get call to retrieve user, need associated route in node/express routes
            register: function(user) {
                var promise = $http.post('/api/auth/register', user).then(
                    function(res) {
                        var user = {
                            email: res.data.email,
                            token: res.data.token
                        };
                        currentUser = user;
                        $cookies.put('currentUser', JSON.stringify(user));
                        return res;
                    });
                return promise;
            },
            user: function() {
                try {
                    currentUser = JSON.parse($cookies.get('currentUser'));
                    return currentUser;
                } catch (err) {
                    return false;
                }
            },
            logout: function() {
                currentUser = {};
                $cookies.remove('currentUser');
            },
            isAuthenticated: function() {
                try {
                    currentUser = JSON.parse($cookies.get('currentUser'));
                    return currentUser ? true : false;
                } catch (err) {
                    return false;
                }
            },
            isAdmin: function() {
                try {
                    currentUser = JSON.parse($cookies.get('currentUser'));
                    return currentUser.admin ? true : false;
                } catch (err) {
                    return false;
                }
            }
        };
    }
]);