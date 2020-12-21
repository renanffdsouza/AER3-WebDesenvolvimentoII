// importa modulo
var fs = require('fs');

console.log("Preparando arquivo para gravação");
let data = '---Exercicio 06 desenvolvimento web II---';
// metodo assicrono para gravação em arquivo ja existente
fs.writeFile('texto.txt',data,{enconding:'utf-8',flag: 'a'},function(err){
    if(err){
        return console.error(err);
    }
    console.log("Gravado com sucesso");
    console.log("Lendo arquivo");

    fs.readFile('texto.txt',function(err,data){
        if(err){
        
            return console.error(err);
        }
        console.log(data.toString());
    });
});