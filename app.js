const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then((res) => {
//     console.log('RESP: ', res);
// }).catch(err => {
//     console.log('Error:', err);
// })

// clima.getclima(-12.0431805, -77.0282364).then(resp => {
//     console.log('RESP', resp);
// }).catch(err => {
//     console.log(err);
// })

const getInfo = async(direccion) => {

    try {
        const cord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getclima(cord.lat, cord.lng);
        return `El clima de ${ cord.direccion } es de ${ temp }.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);