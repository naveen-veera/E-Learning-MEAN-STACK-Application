const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { User } = require('../model/User');


router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

//Inserting user values in db
router.post('/', (req, res) => {
    var usr = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        phone: req.body.phone,
        group: req.body.group,
        doj : req.body.doj,
        type : req.body.type
    });
    usr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var usr = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        phone: req.body.phone,
        group: req.body.group,
        doj : req.body.doj,
        type : req.body.type
    };
    User.findByIdAndUpdate(req.params.id, { $set: usr }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;