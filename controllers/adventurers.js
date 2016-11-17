var ADV = require('../models/model.adventurers');

module.exports = {
    create: (req, res) => {
        var newDoc = new ADV(req.body);
        console.log(newDoc);

        newDoc.save((err, doc) => {
            if (err) {
                return res.send(err);
            }
            console.log(doc);
            res.send(doc);
        });
    },
    get: (req, res) => {

        ADV.find({}, (err, docs) => {
            if (err) {
                return res.send(err);
            }
            res.json(docs);
        })

    }
}
