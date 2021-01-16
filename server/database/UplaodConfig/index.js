import { config } from 'dotenv';

config();

export default {
  aws: {
    secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    access_key_id: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
    bucket_name: process.env.AWS_BUCKET_NAME,
  },
};
