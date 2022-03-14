const add = require('./utils.js')
const getNotes = require('./notes.js')

const sum = add(4, -2)
const msg = getNotes()

console.log('Soma: ', sum)
console.log('Nota: ', msg)