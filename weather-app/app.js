const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]


if (address){
console.log('Lugar passado:', address)
geocode(address, (error, {latitude, longitude, lugar} = {}) => {
    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }

        console.log('Lugar: ', lugar)
        console.log('Data: ', forecastData)
      })
})
}
else {
    console.log('Indique o Local que deseja realizar a Previsão Climática!')
}

//console.log(a(2, 3))