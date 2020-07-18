const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');


router.get('/products', productsController.listAll);
router.get('/products/:productsId', productsController.showOne);
router.post('/products', productsController.createNewEntry);

module.exports = router;