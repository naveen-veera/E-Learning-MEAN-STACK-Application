const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Squad } = require('../model/Squad');

router.get('/', (req, res) => {
    Squad.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Squad Details :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Squad.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Squad Details :' + JSON.stringify(err, undefined, 2)); }
    });
});

//Inserting user values in db
router.post('/', (req, res) => {
    var squad = new Squad(req);
    squad.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Squad Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var squad = new Squad(req);

    Squad.findByIdAndUpdate(req.params.id, { $set: squad }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Squad.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;