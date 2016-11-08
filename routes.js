// Master routing file which defines all the routes we will have on the back end
var Auth = require("./controllers/auth"),
    express = require("express");

var app = express();

module.exports = (app) => {
    app.get("/logout", Auth.logout);
    app.post("/register", Auth.register);
    app.post("/login", Auth.login);

    // set the home/root route and send it off to the appropriate handler
    app.get('/', (req, res) => {
        res.sendFile("login.html", {
            root: './public/html'
        });
    });

    app.get("/index", (req, res) => {
        res.sendFile("index.html", {
            root: "./public/html"
        });
    });
    app.get("/fantasy", (req, res) => {
        res.sendFile("fantasy.html", {
            root: "./public/html"
        });
    });

}
