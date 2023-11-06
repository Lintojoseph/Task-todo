const express = require('express');
const router= express.Router();

const {usersignup,userLogin,addTodo,updateTask}=require('../controllers/usercontrol')

router.post('/signup',usersignup)
router.post('/',userLogin)
router.post('/todo',addTodo)
router.put('update/:id',updateTask)


module.exports = router;