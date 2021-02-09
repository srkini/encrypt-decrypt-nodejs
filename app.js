const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const port = 8081;

const routes = require('./routes/router.js');
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:'500mb',extended:false}));

app.use('/',routes);

app.listen(port,()=>{
    console.log(chalk.green('Server Created!!!'));
    console.log(chalk.green(`Encrypt-Decrypt Engine started working on port : ${port}`));
})
