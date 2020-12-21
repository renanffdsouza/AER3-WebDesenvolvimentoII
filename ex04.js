// importa modulo File system
var fs = require('fs');
console.log("O arquivo está sendo lido")
// leitura do arquivo de forma assíncrona
fs.readFile('texto.txt', function(err,data){
    if(err){
        return console.erro(err);
    }
    console.log(data.toString());
});
