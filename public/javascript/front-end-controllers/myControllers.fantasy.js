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
        description: "The goblin awoke with a start.  He looked at the clock on the nightstand and saw that he overslept and was late for school.  Should he brush his teeth, or get dressed?",
        choiceOne: "Brush Teeth",
        choiceTwo: "Get Dressed",
        active: true
    }, {
        uniqueId: 1,
        description: "The goblin brushed his teeth quickly.  He got dressed, grabbed his book bag and ran to the bus stop.  He got to the bus stop and saw the bus leaving.  Should he chase the bus or walk to school?",
        choiceOne: "Chase Bus",
        choiceTwo: "Walk",
        active: false
    }, {
        uniqueId: 2,
        description: "The goblin got dressed quickly, grabbed his book bag, and ran to the bus stop just as the bus arrived.  He got on and looked for a seat.  Should he sit by himself or with his friend Hector.",
        choiceOne: "Sit Alone",
        choiceTwo: "With Hector",
        active: false
    }, {
        uniqueId: 3,
        description: "The goblin ran after the bus, but wasn’t quick enough.  The bus pulled away.  The goblin noticed a bicycle on the ground  Should the goblin ride the bike or walk?",
        choiceOne: "Ride Bike",
        choiceTwo: "Walk",
        active: false
    }, {
        uniqueId: 4,
        description: "The goblin walked toward his school.  As he walked he noticed a puppy waving her tail happily. Should the goblin pet the puppy or continue walking?",
        choiceOne: "Pet Puppy",
        choiceTwo: "Keep Walking",
        active: false
    }, {
        uniqueId: 5,
        description: "The goblin sat down behind the bus driver.  He opened his backpack and took out an apple.  Should he eat the apple or save it for later?",
        choiceOne: "Eat Apple",
        choiceTwo: "Save It",
        active: false
    }, {
        uniqueId: 6,
        description: "The goblin sat with Hector and began talking.  Hector asked him what video game he wanted to play after school.  Should the goblin tell Hector he wants to play Call of Duty or Bioshock?",
        choiceOne: "Call Of Duty",
        choiceTwo: "Bioshock",
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
    main.hideTheQuote = function() {
        main.showQuote = false;
    }
    main.showTheQuote = function() {
        main.showQuote = true;
    }

}
