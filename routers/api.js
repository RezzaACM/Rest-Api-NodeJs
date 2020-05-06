const express = require('express');
const router = express.Router();
const ninjaController = require('../controllers/ninjaController');

router.route('/ninja/store').post(ninjaController.new)
router.route('/ninja/get').get(ninjaController.index)
router.route('/ninja/:id')
    .get(ninjaController.view)
    .post(ninjaController.update)
    .delete(ninjaController.delete)




module.exports = router;