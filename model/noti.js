const db = require('../database/db');
const pgdb = require('../database/pgdb');   

const addToken = async (token) => {
    try {
        //const res = await pgdb.query(`INSERT INTO notify (token) VALUES (?)`, [token]);
        // const res = await pgdb.query(`INSERT INTO notify (token) VALUES ($1)`,[token]);
        const res = await pgdb.query(`SELECT * FROM notify`);
        return res;
    } catch (e) {
        console.log(e);

    }
}

const getToken = async () => {
    try {
        const res = await db.execute(`SELECT * FROM notify`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {addToken,getToken };