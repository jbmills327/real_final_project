angular.module("myApp")
    .controller("MainCtrl", mainController);

// This is my router for the ng-view on the fantasy html
angular.module("myApp")
    .config(myRouter);

// injecting the router
myRouter.$inject = ["$routeProvider"];


// This is the function that controls where we hop during the routing process
function myRouter($routeProvider) {
    $routeProvider
        .when("/level1", {
            templateUrl: "./html/templates/kids/kids.level1.html"
        })
        .when("/level2", {
            templateUrl: "./html/templates/kids/kids.level2.html"
        })
        .when("/level3", {
            templateUrl: "./html/templates/kids/kids.level3.html"
        })
        .when("/level4", {
            templateUrl: "./html/templates/kids/kids.level4.html"
        })

}


// Main Controller
function mainController() {
    var main = this;

    // This is the array that will hold the new users, currently is set to save data in and pull data from local storage
    main.newUserList = JSON.parse(window.localStorage.getItem("users")) || [];
    // Empty new user object
    main.newUsers = {}
        // Creating the User class
    var User = function(name, age, adventurer) {
            this.name = main.name;
            this.age = main.age;
            this.adventurer = main.adventurer;
        }
        // This is the function that creates new Users
    main.addAUser = function() {
        main.newUsers = new User(main.name, main.age, main.adventurer);
        main.newUserList.push(main.newUsers);
        $("#myModal").modal("hide");
        main.newUsers = {};
        window.localStorage.setItem("users", JSON.stringify(main.newUserList));
        console.log(main.newUserList);
        main.greeting = "Hello " + main.name + ", are you ready for an adventure?";

    }


    // These are the paths to assign text based on the page and choices made.
    main.paths = [{
        uniqueId: 0,
        description: "This is the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: true
    }, {
        uniqueId: 1,
        description: "This is page two of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 2,
        description: "This is the page three of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 3,
        description: "This is the page three of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 4,
        description: "This is the page four of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 5,
        description: "This is the page five of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 6,
        description: "This is the page six of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 7,
        description: "This is the page seven of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 8,
        description: "This is the page eight of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 9,
        description: "This is the page nine of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 10,
        description: "This is the page ten of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 11,
        description: "This is the page eleven of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 12,
        description: "This is the page twelve of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 13,
        description: "This is the page thirteen of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 14,
        description: "This is the page fourteen of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 15,
        description: "This is the page fifteen of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 16,
        description: "This is the page sixteen of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 17,
        description: "This is the page seventeen of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 18,
        description: "This is the page eighteen of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 19,
        description: "This is the page nineteen of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 20,
        description: "This is the page twenty of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 21,
        description: "This is the page twenty-one of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 22,
        description: "This is the page twenty-two of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 23,
        description: "This is the page twenty-three of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 24,
        description: "This is the page twenty-four of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 25,
        description: "This is the page twenty-five of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 26,
        description: "This is the page twenty-six of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 27,
        description: "This is the page twenty-seven of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 28,
        description: "This is the page twenty-eight of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 29,
        description: "This is the page twenty-nine of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 30,
        description: "This is the page Thirty of the first story in level 1 for the by kids for kids section.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 31,
        description: "YOU WON!!",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, ];


    // This is the function that pipes the text in the description above to the TTS function.
    main.speakTheText = function(description) {
        responsiveVoice.speak(description);
    }


    // This is the function that was created to move from one page to another when a choice is made.
    main.choose = function(uniqueId, choice) {
        if (uniqueId < 15) {
            main.paths[uniqueId].active = false;
            main.paths[uniqueId * 2 + choice].active = true;
        } else {
            main.paths[uniqueId].active = false;
            main.paths[31].active = true;
        }
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

    main.hideTheQuote = function() {
        main.showQuote = false;
    }
    main.showTheQuote = function() {
        main.showQuote = true;
    }

}
