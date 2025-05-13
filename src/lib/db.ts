import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: 'localhost',
  user: 'gustavotz',
  password: 'G78u45s21tA$',
  database: 'DADOS',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})
