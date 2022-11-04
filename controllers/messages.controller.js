const path = require('path');

function getMessages(req, res){
    // path.join(__dirname,'..','public', 'swatKats.jpeg')
    res.render('messages');
    // res.sendFile(path.join(__dirname,'..','public','images', 'swatKats.jpeg'))
    // res.send('<ul><li>Hello World</li><ul>');
};

function postMessage(req, res){
    console.log('updating message...');
};

module.exports = {
    getMessages,
    postMessage
}