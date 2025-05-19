import * as dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

export const db = mysql.createPool({
  host: 'localhost',
  user: 'gustavotz',
  password: 'G78u45s21tA$',
  database: 'receitas',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})
