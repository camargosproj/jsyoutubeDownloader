const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require('express');
const app = express();


app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname});
});
/*
const inputbtn = document.querySelector('.input-btn');
const input = document.querySelector('.input');



inputbtn.addEventListener('click', () => {
    console.log(input.value);

    console.log(input.value);

ytdl(input.value)
.pipe(fs.createWriteStream('video.mp4'));

});*/

