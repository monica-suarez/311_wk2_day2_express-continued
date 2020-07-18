const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');


router.get('/comments', commentsController.listAll);
router.get('/comments/:commentsId', commentsController.showOne);
router.post('/comments', commentsController.createNewEntry);

module.exports = router;