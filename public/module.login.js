angular.module("module.login", [])
    .controller("controller.login", loginController);

loginController.$inject = ["$http"]

function loginController($http) {
    var login = this;
    login.greeting = "This is working";
    login.newUser = {};
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


    login.createUser = function() {
        $http.post("/register", login.newUser)
            .then(function(res) {
                console.log(res.data);
                console.log("Bullshit");
                location.href = "/index";
            })
            .catch(function(err) {
                console.log("This is an error");
                console.error(err);
            });

    }
}
