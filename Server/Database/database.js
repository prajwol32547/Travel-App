import mysql from "mysql";
import Logger from "../Controller/Logger.js";
export const Database = mysql.createConnection({
   host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true,
  database:'Travel'
});
Database.connect((err) => {
  if (err) {
    Logger.error("Error connecting to database");
  } else {
    Logger.info("connected to db");
  }
});