const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'X-RapidAPI-Key': 'af9b5964f5msh6afe7b9b4b85f90p124a2djsn52fb09b06f41',
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw 'No hay resultados para ' + direccion;
    }

    const data = resp.data.Results[0];
    const nombre = data.name;
    const latitud = data.lat;
    const longitud = data.lon;


    return {
        nombre,
        latitud,
        longitud,
    }

}

module.exports = {
    getLugarLatLong
}