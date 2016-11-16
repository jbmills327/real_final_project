angular.module("myApp")
    .controller("MainCtrl", mainController);

// This is my router for the ng-view on the fantasy html
angular.module("myApp")
    .config(myRouter);

// injecting the router
myRouter.$inject = ["$routeProvider"];
mainController.$inject = ["$http"];


// This is the function that controls where we hop during the routing process
function myRouter($routeProvider) {
    $routeProvider
        .when("/level1", {
            templateUrl: "./html/templates/fantasy/level1.html"
        })
        .when("/level2", {
            templateUrl: "./html/templates/fantasy/level2.html"
        })
        .when("/level3", {
            templateUrl: "./html/templates/fantasy/level3.html"
        })
        .when("/level4", {
            templateUrl: "./html/templates/fantasy/level4.html"
        })

}




// Main Controller
function mainController($http) {
    var main = this;
    main.races = ["Elf", "Dwarf", "Human", "Garnog"];

    // This is the array that will hold the new users, currently is set to save data in and pull data from local storage
    // main.newUserList = JSON.parse(window.localStorage.getItem("users")) || [];
    // Empty new user object
    main.newAdventurerList = [];
    main.newAdventurer = {}
        // Creating the User class
    var Adventurer = function(name, age, adventurer, selectRace) {
            this.name = main.name;
            this.age = main.age;
            // this.adventurer = main.adventurer;
            this.selectRace = main.selectRace;
        }
        // This is the function that creates new Users
    main.addAdventurer = function() {
        main.newAdventurer = new Adventurer(main.name, main.age, main.adventurer);
        console.log(main.newAdventurer);
        // main.newUserList.push(main.newAdventurer);
        $("#myModal").modal("hide");
        main.newAdventurer = {};
        main.greeting = "Hello " + main.name + ", are you ready for an adventure?";


    }





    // This is the function that pipes the text in the description above to the TTS function.
    main.speakTheText = function(description) {
        responsiveVoice.speak(description);
    }




    // This is the function for the custom filet that was created.
    main.isActive = function(path) {
        // console.info(arguments);
        return path.active;
    }


    // This is the function for the reset button to set pages back to 0
    main.resetPages = function(uniqueId) {
        main.paths[uniqueId].active = false;
        main.paths[0].active = true;
    }


    // This is used to show and hide Goblin Quest book

    main.showGoblinQuest = false;
    // This is used to hide all the thumbnails, will need to be included on all "back" buttons

    main.hideLevelOneThumbs = false;
    // This is used to toggle page two choice one

    main.showQuote = true;



    // These are crrently used to toggle between pages.  I am looking for a better answer at this time

    main.heresTheGoblin = function() {
        console.log("This is working");
        main.showGoblinQuest = !main.showGoblinQuest;
        main.hideLevelOneThumbs = !main.hideLevelOneThumbs;
    };
    main.showTheQuote = function() {
        main.showQuote = !main.showQuote;
    }

}
