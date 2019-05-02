import Express, { Application } from 'express'

import Routes from './routes'
import HttpEnchriment from './middleware/HttpEnchriment'

class App {
    express: Application;

    constructor () {
        this.express = Express ()
        HttpEnchriment.setDefaultsData()

        this.middlewares()
        this.routes()
    }

    middlewares () {
        this.express.use(HttpEnchriment.alterHeaders)
    }

    routes () {
        this.express.use(Routes)
    }
}

export default new App().express
