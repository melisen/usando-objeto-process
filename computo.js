function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


process.on("message", (msg)=>{
    if(msg.empezar == "start"){
        let cantNumeros;
        if(msg.cantNumeros){
            cantNumeros = msg.cantNumeros;
            
        } else{
            cantNumeros = 100000000;
        }

        const arrRandoms = [];
        
        for (let i = 0; i < cantNumeros; i++) {
            arrRandoms.push(getRandomInt(1, 1000));
        }

        const objResultado = {};
        arrRandoms.forEach(function(numero){
            objResultado[numero] = (objResultado[numero] || 0) + 1;
          });    
          
        process.send({resultado:objResultado})
    }


})
