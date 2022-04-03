const express = require('express');
const mongoose = require('mongoose');

const dishRouter = require('./routers/dishRouter');
const promoRouter = require('./routers/promoRouter');
const leaderRouter = require('./routers/leaderRouter');

const app = express();
const PORT = 3000;


// Connection URL
const url = 'mongodb://127.0.0.1:27017/assignment2';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });



app.get('/', (req, res) => {
    res.send("<h1>Application's Home Page</h1><br><br><b>Submitted By :</b><br>Name : Suvash Kumar<br>Roll: 1910476124");
});
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log("Server is running.....");
});