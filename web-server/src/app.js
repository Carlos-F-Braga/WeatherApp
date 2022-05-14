const path = require('path');
const express = require('express')

const app = express()
const PublicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(PublicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send([{
        Location: 'Philadelphia',
        Forecast: 'Está Nevando'
    }, {
        Location: 'Rio Preto',
        Forecast: 'Está Queimando'
    }])
})

const port = 3000

app.listen(port, () => {
    console.log('Server is listening on port:', port )
})