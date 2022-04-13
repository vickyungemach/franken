const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth');

const authCtrl = require('./auth.controller');


// api/user
router
    .route('/register')
    .post(authCtrl.register)

router
    .route('/login')
    .post(authCtrl.login)
    
router  
    .route('/')
    .get(protect, authCtrl.getUser);

router
    .route('/:id')
    .delete(authCtrl.deleteUser)



module.exports = router; 


/* 
    
    POST @ api/user/register
        Payload { name, password}
        Response { token }

    POST @ api/user/login
        Payload { name, password }
        Response { token }

    GET @ api/user
        Response { _id, name, bookmarks }

    DELETE @ api/user/:id
        Response { _id, name, bookmarks }

*/
