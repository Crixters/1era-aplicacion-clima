const axios = require('axios');

const getClima = async(lat, lon) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=800298de0d2a08f5affc3da7ee11a590&units=metric`);

    return resp.data.main.temp;



};

module.exports = {
    getClima
}