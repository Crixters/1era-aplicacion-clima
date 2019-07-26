const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            description: 'Nombre ciudad (Si está fuera de USA, especifique país)',
            demand: true,
            type: 'string'
        }
    })
    .help()
    .argv;




module.exports = {
    argv
}