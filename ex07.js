var fs = require("fs");

console.log("Deletando o arquivo");
fs.unlink('texto.txt',function(err){
    if(err){
        return console.error(err);
    }
    console.log("Arquivo deletado");
});