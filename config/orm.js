const mysql = require('./connection');

const orm = {
    selectAll: async (tableInput) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`SELECT * FROM ?;`, tableInput);
        return data;

    },
    insertOne: async (tableInput,colInput, valInput) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`INSERT INTO ? (?) VALUES (?);`,[tableInput,colInput,valInput]);
        return data;
    },
    updateOne: async (tableInput, updateCondition, burgerId ) => {
        const connection = await mysql.connect(`UPDATE ? SET ? WHERE (id = ?)`,[tableInput, updateCondition, burgerId]);
        return data;
    }

}
module.exports = orm;
