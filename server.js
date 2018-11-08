const express = require('express');
const bodyParser = require('body-parser');

const analyze = require('./routes/api/analyze');

const app=express();
const path=require('path');
const port=process.env.PORT||5000;

//Body parser middleware
app.use(bodyParser.json());

//use Routes
app.use('/api/analyze',analyze);
app.use(express.static(path.join(__dirname,'client','build')))
app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'client','build','index.html')));

app.listen(port,()=>console.log('Server started on port ${port}'));

