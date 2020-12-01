const axios = require('axios');

const getClima = async ( lat, lng ) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=81501cdfaf2ddc47fbf589e5a19cba3a&units=metric`) 

  return resp.data.main.temp

}

module.exports = {
  getClima
}