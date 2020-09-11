"use strict";

require("dotenv/config");

var envVars = process.env;
module.exports = {
  port: envVars.PORT,
  env: envVars.NODE_ENV,
  api_key: envVars.API_KEY,
  "sqlconn": {
    server: envVars.DB_SERVER,
    user: envVars.DB_USER,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_NAME
  }
};