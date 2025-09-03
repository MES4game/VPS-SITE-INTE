import mysql from 'mysql2/promise';

export const DB = mysql.createPool({
    host:     process.env.VPS_SITE_DB_HOST ?? 'localhost',
    port:     Number(process.env.VPS_SITE_DB_PORT ?? 3306),
    user:     process.env.VPS_SITE_DB_USER ?? 'user',
    password: process.env.VPS_SITE_DB_PASS ?? 'password',
    database: process.env.VPS_SITE_DB_NAME ?? 'database'
});
