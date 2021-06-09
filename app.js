const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require('express');
const app = express();


app.listen(3000);

app.get('/', (req, res) => {
    console.log('Server is woking ');
    res.sendFile('./index.html', { root: __dirname});
});


