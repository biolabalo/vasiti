'use strict';

import mysql from 'mysql';
import util from 'util';
import { config } from 'dotenv';
import debug from 'debug';
import db_config from './config';

const log = debug('dev');
config();
const db = db_config[process.env.NODE_ENV];

//  local mysql db connection
const pool = mysql.createPool({
  connectionLimit: 100,
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database,
  charset: db.charset,
  port: db.port,
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      log('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      log('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      log('Database connection was refused.');
    }
  }
  if (connection) {
    connection.release();
    log(`Connected to database ${db.database}`);
  }
});
pool.query = util.promisify(pool.query);
module.exports = pool;
