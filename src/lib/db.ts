import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: 'localhost',
  user: 'gustavotz155',
  password: 'G78u45s21tA$',
  database: 'livro_de_receitas',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})
