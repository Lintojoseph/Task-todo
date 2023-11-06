const express = require('express');
const mongoose=require('mongoose')
require('dotenv').config()
const cors=require('cors')
const path=require('path');
const bodyParser = require('body-parser');
const usemodel = require("../Backend/models/usemodel");
const userouter = require('./Routes/routes');


const app=express()

app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    methods: ["GET", "POST", "DELETE", "PUT","PATCH"],
    credentials: true
  })
);

app.use('/',userouter)

mongoose.connect(process.env.DB)
const db=mongoose.connection;
db.on('error',(error)=>console.log(error))
db.once('open',()=> console.log('connected to database'))

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
