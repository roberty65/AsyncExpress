var express = require('express');
var asyncWrapper = require('../middlewares/express-cb-wrapper').asyncWrapper;
var sb = require('../middlewares/sb');
var svcUser = require('../services/user');
var router = express.Router();

// exports
module.exports = router;

// setup url routes
router.get('/', asyncWrapper(svcUser.async_list), sb)
router.post('/', asyncWrapper(svcUser.async_add), sb)
