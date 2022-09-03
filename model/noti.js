const db = require('../database/db');

const addToken = async (token) => {
    try {
        const res = await db.execute(`INSERT INTO notify (token) VALUES (?)`, [token]);
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