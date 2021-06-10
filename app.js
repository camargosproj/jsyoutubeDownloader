const fs = require('fs');

const ytdl = require('ytdl-core');
const express = require('express');
const cors = require('cors');
const app = express();
//app.use(cors());
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is woking ');
});
app.get('/', (req, res) => {
    console.log('Server is woking ');
    res.sendFile('./index.html', { root: __dirname});
});

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
});


