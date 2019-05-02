import { Request, Response, NextFunction } from 'express'

import readline from 'readline-sync'

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
  alterHeaders(req: Request, res: Response, next: NextFunction) {
    if (!data.phoneCode) return
    res.header('X-MSISDN', data.phoneCode)

    /**
     * Call API in this path and get response
     */
    const path = req.param

    next()
  }

  /**
   * @description function to set phoneNumber when server is started
   */
  setDefaultsData() {
    data.phoneCode = readline.question('set your phone number: ')
    data.baseURL = readline.question('set base URL: ')
  }
}

export default new HttpEnchriment()
