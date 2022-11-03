function read(){
    return decryptData('data')
}

function decryptData(data){
    return data;
}


// module.exports.read or
// exports.read =
// module.exports = function(){} if it the only function which we are exporting

module.exports = {
    read
}