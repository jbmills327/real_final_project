// Master routing file which defines all the routes we will have on the back end
var Auth = require("./controllers/auth"),
    express = require("express"),
    Adv = require("./controllers/adventurers");

var app = express();

module.exports = (app) => {



    // set the home/root route and send it off to the appropriate handler
    app.get('/', (req, res) => {
        res.sendFile("login.html", {
            root: './public/html'
        });
    });
    app.post("/login", Auth.login);
    app.get("/logout", Auth.logout);

    app.get('/', Auth.session);


    // anythin below line is protected
    // app.all('/api*', Auth.session);

    // app.post("/login", Auth.login);
    // app.get("/logout", Auth.logout);
    app.post("/register", Auth.register);
    app.post('/api/advs', Adv.create);
    app.get('/api/advs/:id', Adv.get);

    app.get("/api/getUserId", (req, res) => {
        console.log("This is the session ID: ", req.session.userId);
        res.send(req.session.userId);
    })



    // Backend routing for index.html
    app.get("/index", (req, res) => {
        res.sendFile("index.html", {
            root: "./public/html"
        });
    });
    // Backend routing for fantasy.html
    app.get("/fantasy", (req, res) => {
        res.sendFile("fantasy.html", {
            root: "./public/html"
        });
    });
    // Backend routing for horror.html
    app.get("/horror", (req, res) => {
        res.sendFile("horror.html", {
            root: "./public/html"
        });
    });
    // Backend routing for scifi.html
    app.get("/scifi", (req, res) => {
        res.sendFile("scifi.html", {
            root: "./public/html"
        });
    });
    // Backend routing for love.html
    app.get("/love", (req, res) => {
        res.sendFile("love.html", {
            root: "./public/html"
        });
    });
    // Backend routing for kids.html
    app.get("/kids", (req, res) => {
        res.sendFile("kids.html", {
            root: "./public/html"
        });
    });

}
