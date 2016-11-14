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
        description: "Koen is the strongest boy in the whole world.  His mommy and daddy love him very very much.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: true
    }, {
        uniqueId: 1,
        description: "While it is universally accepted that little Rob is Big Rob and big Rob is little Rob, there is still much debate as to which one is Handsome Rob.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 2,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 3,
        description: "In contrast there is no debate as to who is handsome Steve.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 4,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 5,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 6,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 7,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 8,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 9,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 10,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 11,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 12,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 13,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 14,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 15,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 16,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 17,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 18,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 19,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 20,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 21,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 22,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 23,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 24,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 25,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 26,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 27,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 28,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 29,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
        choiceOne: "Choice One",
        choiceTwo: "Choice Two",
        active: false
    }, {
        uniqueId: 30,
        description: "The average page will only have one to two sentences.  This should be more than enough room for that to occur.",
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
    main.showTheQuote = function() {
        main.showQuote = !main.showQuote;
    }

}
