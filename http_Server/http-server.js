const http = require('http');

const PORT = 3000;

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {
//         'Content-Type': 'application/json',
//     });

//     // res.end('Hello! Sir Isaac Newton is your friend!'); -- text/plain
//     res.end(JSON.stringify({
//         id: 1,
//         name: 'Sir Isaac Newton'
//     }));
// }); is same as below code

const server = http.createServer();


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

server.on('request', (req, res) => {
    // console.log('messages', req);
    const items = req.url.split('/');
    if(req.method==="POST" && items[1] === 'friends'){
        req.on('data', (data)=>{
            const dataString = data.toString();
            friendsList.push(JSON.parse(dataString));
        })
    }else if (req.method==="GET" && items[1] === 'friends') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        if(items.length > 2){
            const friendsIdx = +items[2];
            res.end(JSON.stringify(friendsList[friendsIdx]));
        }else{
            res.end(JSON.stringify(friendsList));
        }
        // res.end('Hello! Sir Isaac Newton is your friend!'); -- text/plain
        
    }else if(req.method==="GET" && items[1] ==='messages'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Hi I am Vinayak</li>');
        res.write('<li> this is my first Node project practice');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else{
        res.statusCode = 404;
        res.end();   
    }
})




server.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
}); // 127.0.0.1 => localhost;

