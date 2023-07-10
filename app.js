const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    family:4
}).then(()=>console.log('DB connected'));

app.get('/', (req,res) => {
    res.send("Hello from node port");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("server is up and running");
})