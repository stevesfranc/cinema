var express = require('express');
var router = express.Router();
var userController =require('../controllers/userControler');


/* GET users listing. */

/* GET users listing. */
router.get('/', userController.user );
module.exports = router;