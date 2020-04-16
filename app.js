const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
            direccion :{
                alias : 'd',
                desc : 'Dirección de la cuidad para poder obtener mi cuidad',
                demand :  true
            }
        }).argv

/*
lugar.getLugarLatLng(argv.direccion)
        .then(res => console.log(res))
        .catch(err => console.log(err))
*/

/*
clima.getClima(15.6, -87.230003)
.then(res => console.log(res.data.main.temp))
.catch(console.log());
*/

const getInfo = async (direccion) => {

    try {
        let respLugar = await lugar.getLugarLatLng(direccion);
        let respClima = await clima.getClima(respLugar.lat, respLugar.lng);
        return `La temperatura de ${respLugar.direccion} es de: ${respClima.data.main.temp}.`;
    } catch (error) {
        return `No se puedo obtener la temperatura de ${direccion}.`   
    }
}

getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err))