const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');
const api = process.env.API_URL;

//initial route
app.get(`${api}/products`, (req,res)=>{
    const product = {
        id: 1,
        name: 'Chocolate',
        image: 'url_here',
    }
    res.send(product);
})

app.post(`${api}/products`, (req,res)=>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'AyyoSalli-DB'
})
.then(()=>{
    console.log('Database Connection is ready...');
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})