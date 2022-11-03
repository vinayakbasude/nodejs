const axios = require('axios');

function encryptData(data){
    return data;
}

function send(url, data){
    const encryptedData = encryptData(data);
    console.log(`sending ${encryptedData} to ${url}`)
}

axios.get('https://www.google.com').then((res)=>{
    console.log('res',res)
})

module.exports = {
    send
}

console.log(module);