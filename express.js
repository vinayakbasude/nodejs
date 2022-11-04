const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messageRouter = require('./routes/message.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = 3000;


app.use((req, res, next)=>{
    console.log(`${req.method} ${req.baseUrl} ${req.url}`);
    next();
})
/**
 * .use is used for middleware taking 3 params request, response, next
 */
app.use(express.json());

app.use('/site', express.static(path.join(__dirname,'public')))
app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);

app.get('/', (req, res)=>{
    res.render('index', {
        title: 'My Swat Cat',
        caption: "My Swat cats"
    });
});

/**
 * making the application available on port
 */
app.listen(PORT)