// const requestMo = require('./request');
// const resModule = require('./response')

// function request(url, data){
//     requestMo.send(url, data);
//     return resModule.read();
//     // module.exports = function(){} if it the only function which we are exporting
//     // return resModule();
// }

// request('https://google.com', 'hello')

const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
};

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if(isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }
    })
    .on('end',()=> {
        console.log((habitablePlanets.map((planet)=> planet['kepler_name'])))
        console.log(habitablePlanets.length);
        console.log('we are done');
    })
    .on('error', console.log)