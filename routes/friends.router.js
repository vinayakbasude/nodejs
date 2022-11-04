const express = require('express');


const { postFriend, getFriend, getFriends} = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next)=>{
    console.log('ip address', req.ip);
    next();
})

friendsRouter.post('/', postFriend )

friendsRouter.get('/', getFriends);

friendsRouter.get('/:friendId', getFriend);

module.exports = friendsRouter;