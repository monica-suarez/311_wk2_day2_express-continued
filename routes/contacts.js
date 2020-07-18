const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');


router.get('/contacts', contactsController.listAll);
router.get('/contacts/:contactsId', contactsController.showOne);
router.post('/contacts', contactsController.createNewEntry);

module.exports = router;
