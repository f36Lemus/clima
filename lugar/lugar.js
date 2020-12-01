const axios = require('axios');

const getLugarLatLng =  async(dir) => {

const encodeURL = encodeURI( dir)


const instance = axios.create({ 
  baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeURL}&appid=81501cdfaf2ddc47fbf589e5a19cba3a`
})

const resp = await instance.get()

if ( resp.data.length === 0 ) {
  throw new Error(`No hay resultados para ${ dir }`)
}

const data      =  resp.data = resp.data
const direccion = data.name
const lat = data.coord.lat
const lng = data.coord.lon
        

        return {
          direccion, 
          lat,
          lng
        }

}

module.exports = {
  getLugarLatLng
}

