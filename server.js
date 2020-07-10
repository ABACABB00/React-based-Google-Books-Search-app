const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys/books');

mongoose
    .connect(db)
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log(err))

    app.use('/api/books', books);

    if(process.env.NODE_ENV === 'production') {
        app.use(express.static('cilent/build'))
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        })
    }

    const port = process.env.PORT || 5000

    app.listen(port, () => console.log(`server on port... ${port}`))