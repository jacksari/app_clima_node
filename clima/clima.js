const axios = require('axios');

const getclima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=217ad7f12c2bac6f75091177ff4cb2c8&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getclima
}