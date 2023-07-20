
const { rejects } = require('node:assert');
const fs = require('node:fs');

const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta) => {

   
    try {
       
         let salida = '';
         let consola = '';
        if(hasta){
        for(let i = 1; i <= hasta ; i++){
            consola+=`${base} x ${i} = ${i * base}\n`; 
            salida+=`${base} ${colors.red('x')} ${i} = ${i * base}\n`; 
        }
        if(listar){
            console.clear();
            console.log('============================'.green);
            console.log('Es la tabla del : ',base);
            console.log('============================'.green);
        
            console.log(consola);
        } 
        }
        fs.writeFileSync(`Tabla del ${base}.txt`, salida);
            return(`Tabla del ${base}.txt`);
   
        
    } catch (err) {
        throw err;
    }
       
   


}

module.exports = {
    crearArchivo
}