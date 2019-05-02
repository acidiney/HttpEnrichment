"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv').config()

var _App = require('./App'); var _App2 = _interopRequireDefault(_App);

/**
 * @description Starting server on port defined in `.env`
 */
_App2.default.listen(process.env.PORT, function () {
    console.warn(`server running on port ${process.env.PORT}`)
})