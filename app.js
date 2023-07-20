
const {crearArchivo} = require('./helpers/multiplicar');
const{argv} = require('./config/yargs');

const colors = require('colors');



console.clear();

// console.log(process.argv);
console.log(argv);
console.log('base : yargs', argv.b);
// // const base = 6;

// console.log(process.argv);
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');




crearArchivo(argv.base, argv.listar, argv.h)
                .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
                .catch (err =>console.log(err))
