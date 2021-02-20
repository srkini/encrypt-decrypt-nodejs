/* eslint-disable quotes */
/*
------------------------------------------------------------
----------- Developed By : Srikanth Kini , 2021 ------------
------------------------------------------------------------
*/

'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const routes = require('./routes/router.js');
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:'500mb',extended:false}));

app.use('/',routes);
app.use('/getEnryptedVal',routes);
app.use('/getDecryptedVal',routes);

app.listen(process.env.port,()=>{
    console.log(chalk.blue(`Developed By : ${process.env.authorName}`));
    console.log(chalk.green('Server Created!!!'));
    console.log(chalk.green(`Encrypt-Decrypt Engine started on port : ${process.env.port}`));
});