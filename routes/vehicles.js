const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicles');


router.get('/vehicles', vehiclesController.listAll);
router.get('/vehicles/:vehiclesId', vehiclesController.showOne);
router.post('/vehicles', vehiclesController.createNewEntry);

module.exports = router;