const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./routes/products');
const db = require('./db.config');

const app = express();

app.listen(3001, () => {
    console.log("Backend is working!");
});

const cors = require('cors')
app.use(cors())

app.use('/uploads', express.static('uploads'));

mongoose.connect(db)
    .then(() => {
        console.log("Database Connected");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', productRouter); 
