"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _HttpEnchriment = require('./middleware/HttpEnchriment'); var _HttpEnchriment2 = _interopRequireDefault(_HttpEnchriment);

class App {
    

    constructor () {
        this.express = _express2.default.call(void 0, )
        _HttpEnchriment2.default.setDefaultsData()

        this.middlewares()
        this.routes()
    }

    middlewares () {
        this.express.use(_HttpEnchriment2.default.alterHeaders)
    }

    routes () {
        this.express.use(_routes2.default)
    }
}

exports. default = new App().express
