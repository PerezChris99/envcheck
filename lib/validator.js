const dotenv = require('dotenv');
const Joi = require('joi');

dotenv.config();

function validateEnv(schema) {
  const { error, value } = schema.validate(process.env, { abortEarly: false, allowUnknown: true });

  if (error) {
    throw new Error(`Environment validation error: ${error.details.map(x => x.message).join(', ')}`);
  }

  Object.assign(process.env, value);
}

module.exports = validateEnv;
