const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());

require('dotenv/config');
const api = process.env.API_URL;

//initial route
app.get(`${api}/products`, (req,res)=>{
    const product = {
        id: 1,
        name: 'Women Shoes',
        image: 'some_url',
    }
    res.send(product);
})

app.post(`${api}/products`, (req,res)=>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})