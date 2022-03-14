const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log('Nota: ', msg)
console.log(chalk.green("Sucesso"))

