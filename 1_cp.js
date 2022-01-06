//child process is a node module used to create sub process within a script
//you can perform diffrent task with in your script

const cp = require('child_process')
console.log('trying to open calculator');
cp.execSync('calc')

// calculator kholne ke liye
console.log('calulator opened');


// vs code kholne ke liye
console.log('trying to open vs code');
cp.execSync('code');

// start chrome or site in chrome
cp.execSync('start chrome https://www.pepcoding.com/');

let output= cp.execSync('NODE test.js');
console.log('output-->'+output);






