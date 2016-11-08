var mongoose = require("mongoose"),
    SALT_INDEX = 10, // The larger the value the stronger the encryption but also the longer
    //it will take to compare hashes
    bcrypt = require("bcryptjs");

UserSchema = new mongoose.Schema({
    // Attributes go here.
    userName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
    created: {
        type: Number,
        default: () => Date.now()
    }

});

UserSchema.pre("save", function(next) {
    var user = this;
    // user.email = user.email.toLowerCase();

    if (!user.isModified("password")) {
        return next();
    }

    // This is to help protect againt Dictionary attacks and rainbow attacks
    bcrypt.genSalt(SALT_INDEX, (saltErr, salt) => {
        if (saltErr) {
            console.error(saltErr);
            return next(saltErr)
        } else {
            console.info("SALT GENERATED", salt);
            bcrypt.hash(user.password, salt, (hashErr, hashedPassword) => {
                if (hashErr) {
                    console.error(hashErr);
                    return next(hashErr)
                }
                user.password = hashedPassword;
                next();
            })
        }
    })

})


// creates the "collection" in the database
module.exports = mongoose.model("User", UserSchema);
