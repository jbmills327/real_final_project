angular.module("module.login", [])
    .controller("controller.login", loginController);


// angular.module("module.login")
//     .config(anotherRouter);

loginController.$inject = ["$http"];
// anotherRouter.$inject = ["$routeProvider"];

// function anotherRouter($routeProvider) {
//     $routeProvider
//         .when("/register", {
//             templateUrl: "./html/register.html"
//         })
// }


function loginController($http) {
    var login = this;
    login.greeting = "This is working";
    login.newUser = {};
    login.hereItIs = false;
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

    login.showTheStuff = function() {
        login.hereItIs = !login.hereItIs;
    }
}
