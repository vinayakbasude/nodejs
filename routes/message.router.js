const express = require('express');

const { getMessages, postMessage } = require('../controllers/messages.controller');

const messageRouter = express.Router();

messageRouter.get('/', getMessages);

messageRouter.post('/', postMessage);

module.exports = messageRouter;