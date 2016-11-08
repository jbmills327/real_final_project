angular.module("module.login", [])
    .controller("controller.login", loginController);

loginController.$inject = ["$http"]

function loginController($http) {
    var login = this;
    login.greeting = "This is working";
    login.submit = function() {
        $http({
            method: "POST",
            url: "/login",
            data: {
                email: login.email,
                password: login.password
            }
        }).then(function(res) {
            console.info(res.data);
            location.href = "/index";
        }, function(err) {
            console.error(err);
        });
    }
}
