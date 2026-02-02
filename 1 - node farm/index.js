const fs = require('fs'); //Reading and Writing files

//Blocking the synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: \n ${textIn} \n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);

console.log('File written!');

//Non-Blocking , asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/start.txt', 'utf-8', (err, data3) => {
            console.log(data3);
        });
    });
});

