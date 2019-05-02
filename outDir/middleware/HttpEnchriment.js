"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});

var _readlinesync = require('readline-sync'); var _readlinesync2 = _interopRequireDefault(_readlinesync);

/**
 * Storage for creadentials 
 */
const data = {
    phoneCode: '',
    baseURL: ''
}

class HttpEnchriment {
    /**
     * @description Will alter middleware response and add `X-MSISDN` header
     * @param { Request } req
     * @param { Response } res 
     * @param { NextFunction } next 
     */
    alterHeaders (req, res, next) {
        if(!data.phoneCode) return;
        res.header('X-MSISDN', data.phoneCode)

        /**
         * Call API in this path and get response
         */

         console.log(req.path)

        next()
    }

    /**
     * @description function to set phoneNumber when server is started
     */
    setDefaultsData () {
        data.phoneCode = _readlinesync2.default.question('set your phone number: ')
        data.baseURL = _readlinesync2.default.question('set base URL: ')
    }
}

exports. default = new HttpEnchriment()