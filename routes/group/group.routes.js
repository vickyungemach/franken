const express = require('express');
const router = express.Router();
const groupCtrl = require('./group.controller');
const { protect } = require('../../middleware/auth');

// @ api/group

router
    .route('/')
    .get(protect, groupCtrl.getAllMyGroups)
    .post(protect, groupCtrl.saveGroup)

router 
    .route('/:id')
    .get(protect, groupCtrl.getOneGroup)
    .delete(protect, groupCtrl.deleteGroup)

router
    .route('/add/:id')
    .put(protect, groupCtrl.addMembers);

module.exports = router;

/* 
    
    GET @ api/group
        Response [{ _id, owner(_id), title, members: [_id], images: [_id], createdAt, updatedAt }]

    POST @ api/group
        Payload { title }
        Response { _id, owner(_id), title, members: [_id], images: [_id], createdAt, updatedAt }

    PUT @ api/group/add/:id
        Payload { members: [_id] }
        Response { _id, owner(_id), title, members: [_id], images: [_id], createdAt, updatedAt }

*/


/* 
    GET @ api/group
        Response [{ _id, owner, title, members, images, private, createdAt, updatedAt }]

    POST @ api/group
        Payload { title }
        Response { _id, owner, title, members, images, private, createdAt, updatedAt }

    DELETE @ api/group/:id
        Response { _id, owner, title, members, images, private, createdAt, updatedAt }

    PUT @ api/group/add/:id
        Response { _id, owner, title, members, images, private, createdAt, updatedAt }
*/
