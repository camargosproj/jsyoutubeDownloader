//Requiring all modules
const ytdl = require('ytdl-core');
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.static('public'));
app.use(morgan('dev')); //This just logs the request 
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

//Set view Engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', {title : 'Youtube Downloader'});
});

app.get('/download', async (req,res) => {  
    try{
        let URL = req.query.URL;
        info = await ytdl.getInfo(URL)
        let title = info.videoDetails.title
        res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
        ytdl(URL, {format: 'mp4'}).pipe(res);
        }catch(err){
            console.log("Ocorreu um erro: ", err);
        }
});

    
app.listen(PORT, () => {
    console.log('Server is working at port ' + PORT);
});

    

