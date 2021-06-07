'use strict';
import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';

const db = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE
});

db.connect();

export default db;