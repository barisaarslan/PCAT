const express = require('express');
//const { path } = require('express/lib/application');
const path = require('path')
const res = require('express/lib/response');
const app = express();



/*
const myLogger = (req, res, next) =>{
    console.log('Middleware log 1');
    next();
}

const myLogger2 = (req, res, next) =>{
    console.log('Middleware log 2');
    next();
} */


//Middlewares
app.use(express.static('public'));
/*app.use(myLogger);
app.use(myLogger2);
*/

app.get('/', (req, res) => {
    
    res.sendFile(path.resolve(__dirname,'temp/index.html'))
   
   
   
   
    /* const photo = {
        id:1,
        name: "Photo Name",
        description :"Photo Des"
    }
    res.send(photo) */
    
})

const port = 3000;

app.listen(port, () => {
    console.log('Sunucu ${port} portunda başladı');
});