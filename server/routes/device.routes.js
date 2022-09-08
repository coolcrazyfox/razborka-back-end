const Router =require('express')
const router =new Router
const deviceController = require('../controller/device.controller')

router.post('/device', deviceController.createPost)
router.get('/device', deviceController.getPostsByUser)




module.exports =router
