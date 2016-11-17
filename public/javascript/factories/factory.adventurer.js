angular.module("myApp")
    .factory('adventFactory', adventFact);

adventFact.$inject = ['$http'];

function adventFact($http) {

    return {
        getAdvents: function() {
            return $http.get("/api/advs");
        },
        createAdvents: function(adventData) {
            return $http.post("/api/advs", adventData);
        }
    }
}
