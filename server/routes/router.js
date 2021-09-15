const express = require('express')

const router = express.Router()

const services = require('../services/render')

const controller = require('../controller/controller')

/**
 * @description Root route
 * @method GET /
 */

router.get('/',services.homeRoutes)





/**
 * @description add-user
 * @method GET /add user
 */
router.get('/add-user',services.addUserRoutes)




/**
 * @description update-user
 * @method GET /update user
 */

router.get('/update-user',services.updateUserRoutes)


//api

router.post('/api/users',controller.create)
router.get('/api/users',controller.find)
router.put('/api/users/:id',controller.update)
router.delete('/api/users/:id',controller.delete)


module.exports=router