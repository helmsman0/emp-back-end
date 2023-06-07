//import express
const express = require('express')

//create router for express
const router = new express.Router()

//import contriller
const userController = require('../Controller/userController')

//import multer upload configuration
const upload = require('../multerConfig/storageConfig')

//define routes for http request
router.post('/employee/register',upload.single('user_profile'),userController.register)

//define routes for all users
router.get('/employee/get-all-employee-details',userController.getuser)

//define route for view profile
router.get('/employee/view-profile/:id',userController.viewprofile)

//define route to remove
router.delete('/employee/delete-user/:id',userController.deleteuser)

//define route t update user
router.put('/employee/update/:id',upload.single('user_profile'),userController.edituser)


//export router
module.exports = router