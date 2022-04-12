const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Adiciona uma nova Nota',
    handler: function () {
        console.log('Adicionando uma nova Nota!')
    }    
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove uma Nota',
    handler: function () {
        console.log('Removendo uma Nota!')
    } 
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Lista as Notas',
    handler: function () {
        console.log('Listando todas as Notas!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Le uma Nota',
    handler: function () {
        console.log('Lendo uma Nota!')
    }
})

//add, remove, read, list

console.log(yargs.argv)
