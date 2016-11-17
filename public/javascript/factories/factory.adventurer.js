angular.module("myApp")
    .factory('adventFactory', adventFact);

adventFact.$inject = ['$http'];

function adventFact($http) {

    return {
        getAdvents: function(userId) {
            console.log("This is the user ID: ", userId);
            return $http.get("/api/advs/" + userId);
        },
        createAdvents: function(adventData) {
            return $http.post("/api/advs", adventData);
        }
    }
}
