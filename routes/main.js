var express = require('express');
var router = express.Router();


const MainCtrl = require('../controllers/main');


//searchForBox
router.post('/notification/push', MainCtrl.pushNotification);


module.exports = router;
