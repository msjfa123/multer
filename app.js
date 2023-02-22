const express = require("express");
const bodyparser = require("body-parser");
const jalaali = require("jalaali-js");
const formidable = require('express-formidable');


const jwt = require('jsonwebtoken');
require('dotenv').config()
const path = require('path');
const multer = require("multer");
const app = express(); 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:true }));
// app.use(formidable());




app.use('/test',require('./router/member'))

app.listen(4001);







