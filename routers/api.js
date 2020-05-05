const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas')

// get a list of ninjas from the db
router.get('/ninjas', (req, res) => {
    res.send({
        type: 'Get'
    })
})

// add a new ninja to db
router.post('/ninjas', (req, res) => {
    // Ninja.create(req.body).then((ninja) => {
    //     res.send(ninja)
    // });
    const ninja = new Ninja();
    ninja.name = req.body.name ? req.body.name : ninja.name;
    ninja.rank = req.body.rank;
    // save the contact and check for errors
    ninja.save((err) => {
        if (err) {
            res.json(err)
        } else {
            res.json({
                status_code: 201,
                status_message: 'Succes Create New Contact',
                data: ninja
            }, 201)
        }
    })
})

// update a ninja in the db
router.put('/ninja/:id', (req, res) => {
    res.send({
        type: 'Put'
    })
})

// delete a ninja in the db
router.delete('/ninja/:id', (req, res) => {
    res.send({
        type: 'Delete'
    })
})

module.exports = router;