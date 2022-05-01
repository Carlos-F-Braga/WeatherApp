const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1372f2db0562c13bc01b59b2830654a9&query=37.8267,-122.4233&units=m'
const urlgeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?&access_token=pk.eyJ1IjoiYWdyb2ZhdW5vc2FzIiwiYSI6ImNsMmc5ZmFwMDAxcnQzZGt4c2poNm54djkifQ.OxAR99ifL-O0WJdZwLYOVg&limit=1'

request({ url: url, json: true }, (error, response) => {
    if (error){
    console.log('Não foi possível a conexão aos Serviçoes da Weather api!')
} else if (response.body.error) {
    console.log('Não foi possível acessar este Local!')
} else{
    console.log(response.body.current.weather_descriptions[0])
    console.log('Atualmente a temperatura é de ' + response.body.current.temperature + ' graus, mas parece ser de ' + response.body.current.feelslike + ' graus' )
    }
})

request({ url: urlgeo, json: true }, (error, response) => {
    if (error){
        console.log('Não foi possível a conexão aos Serviçoes da GeoCoding api!')
    } else if (response.body.features.length === 0) {
        console.log('Não foi possível encontrar o Local!')
    }else{
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log('Latitude:', latitude, 'Longitude:', longitude)
    console.log('Latitude:'+ latitude, 'Longitude:'+ longitude)
        }
})