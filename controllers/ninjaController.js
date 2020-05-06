// import contact model
const Ninja = require('../models/ninjas');

// Hanlde index actions
exports.index = (req, res) => {
    Ninja.get((err, ninja) => {
        if (err) {
            res.json({
                status_code: 422,
                status_message: err
            })
        } else {
            res.json({
                status_code: 200,
                status_message: "Ninja retrieved successfully",
                data: ninja
            })
        }
    })
}

// Handle view info by id
exports.view = (req, res) => {
    Ninja.findById(req.params.id, (err, ninja) => {
        if (err) {
            res.json({
                err
            }, 422);
            return
        }

        if (!ninja) {
            res.json({
                status_code: 404,
                status_message: "Data Not Found!"
            }, 404);
        } else {
            res.json({
                message: 'Ninja details loading...',
                data: ninja
            })
        }
    })
}

// Handle create a new data ninja
exports.new = function (req, res, next) {
    const ninja = new Ninja();
    ninja.name = req.body.name ? req.body.name : ninja.name;
    ninja.rank = req.body.rank;
    // save the contact and check for errors
    ninja.save((err) => {
        if (err) {
            res.json({
                err
            }, 422)
        } else {
            res.json({
                status_code: 201,
                status_message: 'Succes Create New Contact',
                data: ninja
            }, 201)
        }
    })
}

exports.update = (req, res) => {
    Ninja.findById(req.params.id, (err, ninja) => {
        if (err) {
            res.json({
                err
            }, 422)
        }

        ninja.name = req.body.name ? req.body.name : ninja.name;
        ninja.rank = req.body.ninja;

        // save the new value ninja
        ninja.save((err) => {
            if (err) {
                if (err) {
                    res.json({
                        err
                    }, 404)
                    return
                }
            } else {
                res.json({
                    status_code: 201,
                    status_message: 'Succes Update New Ninja',
                    data: ninja
                }, 201)
            }
        })

    })
}


// Handle delete ninja
exports.delete = (req, res) => {
    Ninja.remove({
        _id: req.params.id
    }, (err, ninja) => {
        if (err) {
            res.send(err)
            return
        }
        if (ninja['deletedCount'] === 0) {
            res.json({
                status_code: 404,
                status_message: 'Data not found!'
            }, 404)
        } else {
            res.json({
                status_code: 200,
                status_message: "Delete Success!",
                id: req.params.id
            }, 200)
        }
    })
}