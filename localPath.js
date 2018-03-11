const fs = require('fs');
const readline = require('readline');

const PATTERN = /https?:\/{2}s3.amazonaws.com\/media-p.slid\.es\/uploads\/\d{1,}\/images\/\d{1,}\//g;
let FILE_PATH = '';
let no_empty_name = false;

const IMAGES_PATH = './images/';
const OUTPUT_FILE_PATH = 'index.html';



const workWithFile = () => {
    fs.readFile(FILE_PATH, (err, data) => {
        var oldData = data.toString();
        var newData = oldData.replace(PATTERN, IMAGES_PATH);
        console.log(`Creating New File from ...${FILE_PATH}`);
        fs.open(OUTPUT_FILE_PATH, 'w+', (err, file) => {
            fs.writeFile(OUTPUT_FILE_PATH, newData, err => {
                console.log(`New File Created at ${OUTPUT_FILE_PATH}`);
            });
        });
    });

}

