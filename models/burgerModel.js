const mysql = require('./connection');


    exports.selectAll = async () => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`SELECT * FROM burgers;`);
        return data;
    }
    exports.insertOne = async (tableInput,colInput, valInput) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`INSERT INTO ? (?) VALUES (?);`,[tableInput,colInput,valInput]);
        return data;
    }
    exports.updateOne = async (tableInput, updateCondition, burgerId ) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`UPDATE ? SET ? WHERE (id = ?)`,[tableInput, updateCondition, burgerId]);
        return data;
    }


