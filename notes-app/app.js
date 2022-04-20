const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Adiciona uma nova Nota',
    builder: {
        title: {
            describe: 'Título da Nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Descrição da Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body)
    }    
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove uma Nota',
    builder: {
        title: {
            describe: 'Título da Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    } 
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Lista as Notas',
    handler () {
        console.log(chalk.green.inverse("Suas Notas: "))
        notes.listNote()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Le uma Nota',
    builder: {
        title: {
            describe: 'Título da Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    } 
})

yargs.parse()
