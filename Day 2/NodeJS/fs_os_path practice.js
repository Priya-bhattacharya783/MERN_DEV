const fs = require('fs');
const os = require('os');
const path = require('path');

// 1. File System (fs) Module Practice
const priyaFile = path.join(__dirname, 'priya.txt');

fs.writeFile(priyaFile, 'This is Priya file', (err) => {
    if(err)
    throw err;

    console.log('File created successfully');
});
fs.unlinkSync(priyaFile);

console.log(priyaFile);