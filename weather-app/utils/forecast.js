const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1372f2db0562c13bc01b59b2830654a9&query='+ encodeURIComponent(latitude) + ',' +encodeURIComponent(longitude) +'&units=m'

    request ({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Não foi possível a conexão aos Serviçoes da Weather api!', undefined)
        }else if (response.body.error) {
            callback('Não foi possível acessar este Local!', undefined)
        }else {

            const dados = 'Atualmente a temperatura é de ' + response.body.current.temperature + ' graus, mas parece ser de ' + response.body.current.feelslike + ' graus' 
                

            callback(undefined, dados)
        }
    })
}

module.exports = forecast