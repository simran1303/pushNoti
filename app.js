const express = require('express');
const router = require('./router/router');
const app = express();
const port = process.env.PORT || 5000;

const sequelize = require('./util/database')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(router);


   
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    })