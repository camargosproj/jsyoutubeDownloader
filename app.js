//Requiring all the modules
const ytdl = require('ytdl-core');

const express = require('express');
const morgan = require('morgan');
const app = express();
const ejs = require('ejs');
//app.use(cors());
//Set midlewhere
app.use(express.static('public'));
app.use(morgan('dev')); //Do not forget to check it later 
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });
//Set view Engine
app.set('view engine', 'ejs');
var port = 5000
app.listen(process.env.PORT || port, () => {
    console.log('Server is working at port ' + port);
});
app.get('/', (req, res) => {
    console.log('Server is working ');
    res.render('index', {title : 'Youtube Downloader'});
});

app.get('/download',(req,res) => {  
    var URL = req.query.URL;
    console.log(URL);
    
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res)
});



