var express = require('express'),
    // file relative to where our server.js is located
    routes = require('./routes'),
    bodyParser = require('body-parser'),
    logger = require('morgan')('dev'),
    mongoose = require("mongoose"),
    sessions = require('client-sessions')({
        cookieName: "heroes-session", // front-end cookie name, currently pulled from package.json, feel free to change
        secret: 'DR@G0N$', // the encryption password : keep this safe
        requestKey: 'session', // req.session,
        duration: (86400 * 1000) * 7, // one week in milliseconds
        cookie: {
            ephemeral: false, // when true, cookie expires when browser is closed
            httpOnly: true, // when true, the cookie is not accesbile via front-end JavaScript
            secure: false // when true, cookie will only be read when sent over HTTPS
        }
    });

// this is the same as:
// logger = require('morgan');
// logger('dev');

var PORT = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost/adventure-reading");
// create the express app
var app = express();
app.use(sessions);

// mount our morgan logger middleware
app.use(logger);

// use body-parser to parse the body of our POST requests
app.use(bodyParser.urlencoded({
    extended: true
}));
// this does the same thing and is slightly more efficient
// app.post('*', bodyParser.urlencoded({extended:true}));

// also parse the json data in the request
app.use(bodyParser.json());

// // set a root route
// app.get('/', (req,res) => {
//     res.send("HOME PAGE");
// });

// add the static route handler for the public directory
app.use(express.static('public'));

// call the exported routes function with the express app
routes(app);

// no route found...
// app.use('*', ...)

// create the app listener
app.listen(PORT, (err) => {
    if (err) {
        console.log("Server error: ", err);
        process.exit(1);
    }
    console.log("Server is up on port", PORT);
});
