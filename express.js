const express = require('express');


const app = express();

const PORT = 3000;


const friendsList = [{
    id: 0,
    name: 'He-Man'
},{
    id: 1,
    name: 'ThunderCats'
},{
    id: 2,
    name: 'SwatKatz'
}]

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use(express.json());

app.post('/friends', (req,res)=>{

    if(!req.body.name){
       return res.status(400).json(
            {
                error: 'Missing friend name'
            }
        );
    };

    const newFriend = {
        name: req.body.name,
        id: friendsList.length
    };

    friendsList.push(newFriend);
    res.json(newFriend);
})

app.get('/', (req, res)=>{
    res.send('hello');
});

app.get('/friends', (req, res)=>{
    res.json(friendsList)
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friendsList[friendId];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error: "Friends does not exist"
        })
    }
});

app.listen(PORT)