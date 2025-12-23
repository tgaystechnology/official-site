import mysql from 'mysql2/promise'

let connection2;

export const createConnection2 = async () => {
    if(!connection2) {
        connection2 = await mysql.createConnection({
            host: process.env.DB2_HOST,
            user: process.env.DB2_USER,
            password: process.env.DB2_PASSWORD,
            database: process.env.DB2_NAME,
            port: process.env.DB2_PORT
        })
    }
    return connection2;
}