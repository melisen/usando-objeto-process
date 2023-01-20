const {fork} = require('child_process');
function getRandoms(req, res){
    const computo = fork('./computo.js');
    //cantidad de números aleatorios en el rango del 1 al 1000 especificada por parámetros de consulta (query).
    //Por ej: /api/randoms?cant=20000.

    const cantNumeros = req.query.cant;
    
    computo.send({empezar:"start", cantNumeros});

    computo.on("message", msg =>{
        const {resultado} = msg;
        console.log(resultado)
        res.send( {resultado} )
    })

}
    
    module.exports = {
        getRandoms
    }