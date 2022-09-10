const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log("folder created successfully");
// });


// write file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
// "I am studying node js",
// err => {
//     if(err) throw err;
//     console.log('file writtn toi....');
// }
// );


//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log("Read successfully", data);
});
