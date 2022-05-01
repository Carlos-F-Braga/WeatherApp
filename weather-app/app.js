const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]


if (address){
console.log('Lugar passado:', address)
geocode(address, (error, data) => {
    if (error) {
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }

        console.log('Lugar: ', data.lugar)
        console.log('Data: ', forecastData)
      })
})
}
else {
    console.log('Indique o Local que deseja realizar a Previsão Climática!')
}

//console.log(a(2, 3))