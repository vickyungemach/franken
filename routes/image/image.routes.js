const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth');

const imageCtrl = require('./image.controller');


// api/image
router
    .route('/')
    .post(protect, imageCtrl.saveImage)
    .delete(protect, imageCtrl.deleteImages)

router
    .route('/:id')
    .get(protect, imageCtrl.getImages)
    .put(protect, imageCtrl.updateImage)



module.exports = router; 


/* 
    POST @ api/
        Payload [ 'key' ]
        Response { _id, url, user, bookmark }

    DELETE @ api/
        Payload [ '_id' ]
        Response [ '_id' ]

    GET @ api/:id
        Response [{ _id, url, user, bookmark }]

    PUT @ api/:id
        Payload { url || bookmark }
*/
