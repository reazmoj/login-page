exports.production = {
  // user: process.env.SQL_USER,
  // password: process.env.SQL_PASSWORD,
  // database: process.env.SQL_DATABASE,
  // server: process.env.SQL_SERVER,
  // port: process.env.SQL_PORT,
  // dialect: "mssql",
  // pool: {
  //   max: 10,
  //   min: 0,
  //   acquire: 30000,
  //   idleTimeoutMillis: 30000
  // },
  // options: {
  //   encrypt: true, // for azure
  //   trustServerCertificate: false, // change to true for local dev / self-signed certs
  //   instancename:  'SQLEXPRESS'
  // }
};

exports.development = {
  user: "sa",
  password: "m.h4400255761",
  database: "InstagramDB",
  server: "localhost",
  port: 1433,
  dialect: "mssql",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
    instancename: "SQLEXPRESS",
  },
};
