import { Router } from 'express'

const router = Router()

/**
 * @description This route will be executed on any request
 * @alert This will be replaced in future ( Now is only for test) 
 */
router.all('*', function (req, res, next) {
    res.send('wi will set your code now')
    next()
})

export default router