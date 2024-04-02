import mysql, { Pool, PoolOptions } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD
const db_database = process.env.DB_DATABASE
const db_port = process.env.DB_PORT;


const pool: Pool = mysql.createPool({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database,
    port: 3306
})

export const mysqlConnect = async ()=> {

    try {
        const connection = await pool.getConnection();
        console.log('Success Connection')
        return connection;
    } catch (e) {
        console.log('DB error:', e)
        throw e
    }
}


export const executeQuery = async (query: string, params?: any[]) => {
    const connection = await mysqlConnect();
    try {
        return await connection.execute(query, params)
    } finally {
        connection.end();
    }
}

