const express = require('express');
const router = require('./router/router');
const sequelize = require('./util/database');
const app = express();
const port = process.env.PORT || 5000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(router);

sequelize
.sync()
.then(r =>{
    console.log(r);
    console.log('sync ');
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    })
})
.catch(err => console.log(err));


   