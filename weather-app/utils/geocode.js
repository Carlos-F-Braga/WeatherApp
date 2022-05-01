const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?&access_token=pk.eyJ1IjoiYWdyb2ZhdW5vc2FzIiwiYSI6ImNsMmc5ZmFwMDAxcnQzZGt4c2poNm54djkifQ.OxAR99ifL-O0WJdZwLYOVg&limit=1'

    request ({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Não foi possível a conexão aos Serviçoes da GeoCoding api!', undefined)
        }else if (response.body.features.length === 0) {
            callback('Não foi possível encontrar o Local!', undefined)
        }else {
            const lugar = response.body.features[0].place_name
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]

            const local = {
                lugar: lugar,
                latitude: latitude,
                longitude: longitude
            }
            callback(undefined, local)
        }
    })
}

// const a = (a, b) => {return a - b}

module.exports = geocode