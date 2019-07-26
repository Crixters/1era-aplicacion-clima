const { getClima } = require('../clima/clima');

const cPromesaGetLugarLatLong = (obj) => {
    console.log(`Ciudad - Estado/País:`.yellow + ` ${obj.nombre}`.cyan + `
Latitud:`.yellow + ` ${obj.latitud}`.cyan + `
Longitud:`.yellow + ` ${obj.longitud}`.cyan);
    getClima(obj.latitud, obj.longitud).then(cPromesaGetClima)

};

const cPromesaGetClima = (clima) => {
    console.log(`Temperatura: `.yellow + `${clima}°C`.cyan);

};

module.exports = {
    cPromesaGetLugarLatLong,
    cPromesaGetClima
};