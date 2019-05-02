"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

const router = _express.Router.call(void 0, )

/**
 * @description This route will be executed on any request
 * @alert This will be replaced in future ( Now is only for test) 
 */
router.all('*', function (req, res, next) {
    res.send('wi will set your code now')
    next()
})

exports. default = router