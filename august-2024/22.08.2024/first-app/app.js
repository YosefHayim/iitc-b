// Importing the file logger.js into the app.js so we can call to any function from it.
// const logger = require('./logger')

// Importing only the log function from logger.js file
// const log = require('./logger')

// function sayHello(name){
//     console.log('Hello ' + name);
    
// }
// sayHello('Josephine') // running the code in terminal by: node app.js

// // global functions
// // console.log(); 
// // setTimeout();
// // clearTimeout();
// // clearInterval();

// console.log(module); // getting info about the specific file.

// const url = 'http:mylogger.io/log'

// Exporting the url and naming it by another name like endPoint
// module.exports.endPoint = url;

// Calling the file and see what we exported and what we have from it
// console.log(logger);

// Calling the function of log with the parameter inside it from the logger file.
// logger.log('Hi there')

// Calling only the function since we import only it with the log variable.
// log('Hi there #2')

// Using the method __filename and __dirname
// console.log(__filename);
// console.log(__dirname);

//utilities for working with file and directory paths
// const path = require('path')
// const pathObject = path.parse(__filename);
// console.log(pathObject);

// const os = require('node:os');
// const totalMem = os.totalmem()
// const freeMem = os.freemem()

// // Provide info about the total memory of the operating system
// console.log('Total Mem: ' + totalMem);

// // Provide info about the free memory of the operating system
// console.log('Free Mem: ' + freeMem);
