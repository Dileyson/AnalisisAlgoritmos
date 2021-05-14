//llamamos al modulo de postgresql y lo conectamos con la app
const pg = require("pg");

const configDB = async (sql) =>{
    const client = new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'apiTaller',
        password: 'Tatiana4',
        port: 5432,
    });
    await client.connect();
    const res = await client.query(sql);
    await client.end();
    return res;
};

module.exports = {configDB};