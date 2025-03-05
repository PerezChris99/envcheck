# envcheck

`envcheck` is a Node.js package that loads environment variables from a `.env` file and validates them against a defined schema. It supports type checking, default values, and produces clear error messages if variables are missing or malformed.


## Installation

```bash
npm install envcheck
```

## Usage

Create a `.env` file in your project root:

```env
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/dbname
```

Define your schema in `config/env-schema.js`:

```javascript
const Joi = require('joi');

const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().uri().required()
});

module.exports = envSchema;
```

Load and validate environment variables in your application:

```javascript
const envcheck = require('envcheck');
const envSchema = require('./config/env-schema');

envcheck(envSchema);
```

## API

### `envcheck(schema)`

- `schema` - A Joi schema object defining the expected environment variables.

## Badges

![MIT License](https://img.shields.io/badge/license-MIT-green)
![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

