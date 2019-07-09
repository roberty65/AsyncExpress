var express = require('express');
var asyncWrapper = require('../middlewares/express-cb-wrapper').asyncWrapper;
var sb = require('../middlewares/sb');
var svcIndex = require('../services/index');
var router = express.Router();

// exports
module.exports = router;

// setup url routes
router.get('/', asyncWrapper(svcIndex.async_index), sb)
