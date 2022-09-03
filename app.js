const express = require('express');
const router = require('./router/router');
const app = express();
const port = process.env.PORT || 5000;

const sequelizeDb = require('./database/db')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(router);


// sequelizeDb
//     .sync({force:true})
//     .then(result => {
//         console.log(result)
//         console.log('sync data');
//     })
//     .catch(err => console.log(err));

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
