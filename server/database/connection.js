"use strict";

import mysql from "mysql";
import { config } from "dotenv";
import db_config from "./config";

config();
const db = db_config[process.env.NODE_ENV];
//  local mysql db connection
const connection = mysql.createConnection({
  connectionLimit: 100,
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database,
  charset: db.charset,
  port: db.port,
});

connection.connect();

module.exports = connection;
