const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log('Nota: ', msg)

console.log(validator.isURL('https://mead.io'))
console.log(validator.isEmail('Carlos@Exemplo.com'))