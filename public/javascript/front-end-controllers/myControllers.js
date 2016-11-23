angular.module("myApp")
    .controller("MainCtrl", mainController);

// This is my router for the ng-view on the fantasy html
angular.module("myApp")
    .config(myRouter);

// injecting the router
myRouter.$inject = ["$routeProvider"];
mainController.$inject = ["$http", "adventFactory"];


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
function mainController($http, adventFactory) {
    var main = this;
    main.races = ["Elf", "Dwarf", "Human", "Mermaid", "Fairy", "Halfling"];
    main.classes = ["Warrior", "Cleric", "Wizard", "Thief", "Princess", "Prince", "Druid"]

    // This is the array that will hold the new users, currently is set to save data in and pull data from local storage
    // main.newUserList = JSON.parse(window.localStorage.getItem("users")) || [];
    // Empty new user object
    main.newAdventurerList = [];
    var idToGet;
    main.newAdventurer = {};
    main.adventList = [];
    main.chooseTheAdent = [];

    // This was before I had the DB setup

    // Creating the User class
    // var Adventurer = function(name, age, adventurer, selectRace) {
    //         this.name = main.name;
    //         this.age = main.age;
    // this.adventurer = main.adventurer;
    //     this.selectRace = main.selectRace;
    // }
    // This is the function that creates new Users

    $http.get('/api/getUserId')
        .then(function(res) {
            idToGet = res.data;
            console.log("THis should be the ID: ", idToGet);
            main.newAdventurer = {
                createdBy: idToGet
            };
            main.getAdventurer(idToGet);
            return idToGet;
        }, function(err) {
            if (err) {
                console.log(err)
            }
        });


    main.addAdventurer = function() {
        adventFactory.createAdvents(main.newAdventurer)
            .then(function(returnData) {
                main.newAdventurer = {
                    createdBy: idToGet
                };
            })
        main.getAdventurer();
        $('#myModal').modal('hide');

        // This was also before I had the DB setup

        // main.newAdventurer = new Adventurer(main.name, main.age, main.adventurer);
        // console.log(main.newAdventurer);
        // main.newUserList.push(main.newAdventurer);
        // $("#myModal").modal("hide");
        // main.newAdventurer = {};
        // main.greeting = "Hello " + main.choose + ", are you ready for an adventure?";
    }


    main.getAdventurer = function() {
        var userId = idToGet
        adventFactory.getAdvents(userId)
            .then(function(returnData) {
                console.log("This is the returndata: ", returnData.data);
                main.adventList = returnData.data;
            }).catch(function(err) {
                console.log("This is the error: ", err);
            });

    }

    main.pushAdventurer = function() {
        main.adjective;

        switch (main.choose.class) {
            case "Warrior":
                main.adjective = "brave";
                break;
            case "Princess":
                main.adjective = "beautiful";
                break;
            case "Cleric":
                main.adjective = "faithful";
                break;
            case "Wizard":
                main.adjective = "wise";
                break;
            case "Thief":
                main.adjective = "Sneaky";
                break;
            case "Prince":
                main.adjective = "handsome";
                break;
            case "Druid":
                main.adjective = "wild";
                break;
            default:
                main.adjective = "heroic";
                break;
        }
        // main.chooseTheAdent.push(main.choose);
        main.greeting = "Hello " + main.choose.name + ", the " + main.adjective + " " + main.choose.race + " " + main.choose.class + ". Are you ready for an adventure?";
        $('#adventModal').modal('hide');
    };


    "Warrior", "Cleric", "Wizard", "Thief", "Princess", "Prince", "Druid"






    // This is the function that pipes the text in the description above to the TTS function.
    main.speakTheText = function(description) {
        responsiveVoice.speak(description);
    };




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
