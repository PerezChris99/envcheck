const envcheck = require('./index');
const envSchema = require('./config/env-schema');

try {
  envcheck(envSchema);
  console.log('Environment variables loaded and validated successfully.');
} catch (error) {
  console.error(error.message);
}