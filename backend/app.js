const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


const errorMiddleware = require("./middleware/error");


const product=require('./routes/productRoute');
const user =require('./routes/userRoute');
const order = require('./routes/orderRoute');

app.use('/api/v1',product);
app.use('/api/v1',user);
app.use('/api/v1',order);


app.use(errorMiddleware);
module.exports = app;