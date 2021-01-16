import dotenv from 'dotenv';

dotenv.config();
module.exports = {
  development: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    charset: process.env.DB_CHARSET,
  },
  test: {
    user: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    database: process.env.TEST_DB_SCHEMA,
    host: process.env.TEST_DB_HOST,
    port: process.env.DB_PORT,
    insecureAuth: true,
  },
  production: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  aws: {
    region: process.env.AWS_REGION,
    bucket_name: process.env.AWS_BUCKET_NAME,
    access_key_id: process.env.AWS_ACCESS_KEY_ID,
    secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  },
  media_base_path: "https://agromall-storage.s3-eu-west-1.amazonaws.com/",
};
