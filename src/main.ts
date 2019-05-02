require('dotenv').config()

import App from './App'

/**
 * @description Starting server on port defined in `.env`
 */
App.listen(process.env.PORT, function () {
    console.warn(`server running on port ${process.env.PORT}`)
})