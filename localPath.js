// LocalPath.js
// Coded By: Cristian Restituyo
// Takes a html file  and replaces all absolute images paths for relative ones.
var fs = require('fs');
var readline = require('readline');

var PATTERN = /https?:\/{2}s3\.amazonaws.com\/media-p\.slid\.es\/uploads\/\d{1,}\/images\/\d{1,}\//g;
var FILE_PATH = '';
var no_empty_name = false;

var EXTENSION = 'html';
var IMAGES_PATH = './images/';
var OUTPUT_FILE_PATH = 'index';

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function workWithFile() {
    fs.readFile(FILE_PATH + '.' + EXTENSION, function (err, data) {
        var oldData = data.toString();
        var newData = oldData.replace(PATTERN, IMAGES_PATH);
        console.log('Creating new file from ' + FILE_PATH + '.' + EXTENSION + '...');
        fs.open(OUTPUT_FILE_PATH + '.' + EXTENSION, 'w+', function (err, file) {
            fs.writeFile(OUTPUT_FILE_PATH + '.' + EXTENSION, newData, function (err) {
                console.log('New file created at ' + OUTPUT_FILE_PATH + '.' + EXTENSION);
            });
        });
    });
}
console.log('/***************************************************/');
console.log('/***********Slides Path Localizer*******************/');
console.log('/****************************************************/');
rl.question('Insert name of the file you wish to transform:', function(answer) {
    FILE_PATH = answer.toString();
    workWithFile();
});



