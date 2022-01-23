const readline = require('readline')
const fs = require('fs');
const { response } = require('express');
const { hasUncaughtExceptionCaptureCallback } = require('process');

function grava(linha){
    console.log(linha)
}

class CsvController {

    async show(){
        const rl = readline.createInterface({
            input: fs.createReadStream('texto.txt')
        })

        rl.on('line', (line) => {
            grava(line)
        })
    }

}

module.exports = new CsvController();
