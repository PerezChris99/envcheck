const Joi = require('joi');

const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().uri().required()
});

module.exports = envSchema;
