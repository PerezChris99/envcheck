const { expect } = require('chai');
const validateEnv = require('../lib/validator');
const envSchema = require('../config/env-schema');

describe('validateEnv', () => {
  beforeEach(() => {
    process.env = {};
  });

  it('should load and validate environment variables', () => {
    process.env.PORT = '3000';
    process.env.DATABASE_URL = 'postgres://user:password@localhost:5432/dbname';

    expect(() => validateEnv(envSchema)).to.not.throw();
  });

  it('should throw an error if required variables are missing', () => {
    process.env.PORT = '3000';

    expect(() => validateEnv(envSchema)).to.throw('Environment validation error');
  });

  it('should assign default values', () => {
    process.env.DATABASE_URL = 'postgres://user:password@localhost:5432/dbname';

    validateEnv(envSchema);
    expect(process.env.PORT).to.equal(3000); // Update to expect a number
  });
});
