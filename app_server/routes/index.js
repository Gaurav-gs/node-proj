var express = require('express');
var router = express.Router();
var ctrlMail = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMail.index);

module.exports = router;
