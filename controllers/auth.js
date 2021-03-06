var User = require("../models/user"),
    bcrypt = require("bcryptjs");

module.exports = ({
        login: (req, res) => {
            console.log("LOGIN::POST::PAYLOAD", req.body);

            User.findOne({
                email: req.body.email
            }, (err, user) => {
                if (err) {
                    console.error("MongoDb Error: ", err);
                    res.status(500).json(err);
                }
                if (!user) {
                    console.warn("No user found!");
                    res.status(403).json({
                        message: "Nope"
                    })
                } else {
                    console.info("auth.login", user);

                    bcrypt.compare(req.body.password, user.password, (compareErr, matched) => {
                        if (compareErr) {
                            console.error("comapareErr error: ", compareErr);
                            res.status(500).json(err);
                        } else if (!matched) {
                            console.warn("Password mismatch");
                            res.status(403).json({
                                message: "One or the other is not right"
                            });
                        } else {
                            req.session.userId = user._id;
                            res.send({
                                message: "Login Success"
                            });

                        }
                    })
                }
            })

        },

        logout: (req, res) => {

            // req.session.reset();
            req.session.destroy();
            res.redirect("/html/login.html")

        },

        register: (req, res) => {
            console.log("Did I even get here?");
            // req.body gets data from front end and when it fires it is going to hit the pre save middleware
            var newUser = new User(req.body);
            console.log(newUser);
            // Actually saves in database
            newUser.save((err, doc) => {
                if (err) {
                    res.send(err);
                }
                console.log(doc);
                res.send(doc);

            });

        },

        session: (req, res, next) => {
            if (req.session.userId) {
                next();
            } else {
                res.redirect("/html/login.html");
            }

        }
    }

)
