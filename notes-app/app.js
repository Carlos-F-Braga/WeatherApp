const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log('Nota: ', msg)

console.log(validator.isEmail('carlos@example.com'))