/**
 * Created by sumeetdubey on 3/11/16.
 */
(function(){
    var app = angular.module("codingTutorial");
    app.controller("LoginController", LoginController);

    function LoginController($location, $rootScope, UserService) {
        
        var vm = this;

        //instances for methods
            vm.login = login;

        function login(user) {
            if (!user) {
                console.log(user.email);
                return;
            }
            UserService.login(user)
                .then(function (response) {
                    if (response.data) {
                        $rootScope.currentUser = response.data;
                        console.log(response.data);
                        $location.url("/profile");
                    }
                })
        }
    }
})();