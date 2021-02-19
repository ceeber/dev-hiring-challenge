const express = require('express');
const router = express.Router();

const repositoryController = require('./controller/repositoryController');


router.get('/', repositoryController.show);

router.post('/all', repositoryController.all);

router.get('/search/:id', repositoryController.search_language);


module.exports = router;