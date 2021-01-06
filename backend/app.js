const express = require('express');
const app = express();

//initial route
app.get('/', (req,res)=>{
    res.send('Ayyo Salli');
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})