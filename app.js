const { argv } = require('./yargs/yargs');
const { getLugarLatLong: lugar } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');
const colors = require('colors');
const { cPromesaGetLugarLatLong } = require('./llamadas-promesas/llamadas-promesas');



lugar(argv.direccion)
    .then(cPromesaGetLugarLatLong)
    .catch(err => console.log(err));